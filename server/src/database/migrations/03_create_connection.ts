import Knex from 'knex'

//conectando com o banco
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        // Integração com outra tabela, recebendo chaves estrangeiras
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') // Atualiza em todas as suas aulas
            .onDelete('CASCADE') // Se o usuário for excluído da plataforma, todas suas aulas cadastradas tb saem
        table.timestamp('create_at')
            .defaultTo('CURRENT_TIMESTAMP')
            .notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes_schedule')
}