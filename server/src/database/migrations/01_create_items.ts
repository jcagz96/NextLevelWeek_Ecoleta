import Knex from 'knex';

export async function up(knex: Knex) {
    //Create Table
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    //Undo create table
    return knex.schema.dropTable('items');

}