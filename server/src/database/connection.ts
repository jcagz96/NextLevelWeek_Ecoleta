import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database0.sqlite'),
    },
    useNullAsDefault: true,


});

//Migrations = database historic

export default connection;