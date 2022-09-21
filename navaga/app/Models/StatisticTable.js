'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class StatisticTable extends Model {
    players (){
        return this.belongsTo('App/Models/Player')
    }
}

module.exports = StatisticTable
