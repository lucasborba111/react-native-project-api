'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayersSchema extends Schema {
  up(){
    this.create('players', (table) =>{
        table.increments()
        table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
        table.string('nickname').notNullable()
        table.string('position')
        table.timestamps()
    })
}
down(){
    this.drop('players')
}
}

module.exports = PlayersSchema
