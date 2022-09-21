'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Player extends Model {
    users() {
        return this.belongsTo('App/Models/User')
    }
    images() {
        return this.hasOne('App/Models/Image')
    }
    statistictable(){
        return this.hasOne('App/Models/StatisticTable')
    }
}

module.exports = Player
