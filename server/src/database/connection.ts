import knex from 'knex'
import path from 'path' // Orquestrar os caminhos locais

// Configurando a conexão e o tipo de banco que usaremos
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
})

export default db