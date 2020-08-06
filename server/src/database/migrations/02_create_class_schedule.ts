import Knex from 'knex'

//conectando com o banco
export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table =>{
        table.increments('id').primary();

        table.integer('week_day').notNullable()
        table.integer('from').notNullable()
        table.integer('to').notNullable()

        // Integração com outra tabela, recebendo chaves estrangeiras
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('class')
            .onUpdate('CASCADE') // Atualiza em todas as suas aulas
            .onDelete('CASCADE') // Se o usuário for excluído da plataforma, todas suas aulas cadastradas tb saem
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule')
}