'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatisticSchema extends Schema {
  up () {
    this.create('statistics', (table) => {
      table.increments()
      table 
      .integer('id_player')
      .references('id')
      .inTable('players')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.integer('pontos')
      table.integer('jogos')
      table.integer('vitorias')
      table.integer('empates')
      table.integer('derrotas')
      table.integer('assistencias')
      table.integer('gols')
      table.timestamps()
    })
  }

  down () {
    this.drop('statistics')
  }
}

module.exports = StatisticSchema
