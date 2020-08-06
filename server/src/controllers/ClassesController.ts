import {Request, Response, response} from 'express'

import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'

interface scheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class ClassesController {

    async index(req: Request, res: Response){
        const filters = req.query


        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if (!filters.week_day || !filters.subject || !filters.time) {
            return res.status(400).json({
                error : 'Missing filters to search classes'
            })
        }
        
        const timeInMinutes = convertHourToMinutes(time)

        const classes = await db('classes')

            // fazer uma query para schedels para ver se existe um horario disponivel, so retorna true para ir paras proximas requisiçoes se tudo bater
            .whereExists(function(){
                this.select('class_schedule.*')
                    .from('class_schedule')
                    //where inteiro, recomendado se uar o where existe
                    .whereRaw('`class_schedule`.`class_id` = `classes`. `id`') // essa coluna esta dentro dessa tabela, tipo um join
                    .whereRaw('`class_schedule`.`week_day` = ??' , [Number(week_day)]) // Cada parametro para ser concatenado precisa de um par de interrogaçoes
                    // se o horario inicial bate com o atendimento
                    .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                    .whereRaw('`class_schedule`.`from` > ??', [timeInMinutes])
                    //
                })



            .where('classes.subject', '=', subject )
            // pegar de dentro da tabela user, onde o id estrageiro da tabela de classes, seja igual a o user id
            .join('users', 'classes.user_id', '=', 'users.id')
            // todos os dados sendo trazidos, por isso o array
            .select(['classes.*', 'users.*'])


        console.log(timeInMinutes)

        return res.json(classes)
    }

    async create(req: Request, res: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body

        const transaction = await db.transaction()

        try {
            const insertedUsersIds = await transaction('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            })

            const user_id = insertedUsersIds[0]
            console.log(user_id)

            const insertedClassesIds = await transaction('classes').insert({
                subject,
                cost,
                user_id
            })

            const class_id = insertedClassesIds[0]

            const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                }
            })

            await transaction('class_schedule').insert(classSchedule)
            // é apenas depois de testar todas as transações, que ele finalmente faz
            await transaction.commit()
            return res.status(201).send()
        } catch (err) {
            // Desfazer alterações no banco caso de algum erro
            transaction.rollback()
            return res.status(400).json({
                error: 'Unexpected error while create new class'
            })
        }
    }
}

