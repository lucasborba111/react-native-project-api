'use strict'
const Player  = use('App/Models/Player')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with players
 */
class PlayerController {

  async index () {
    const players = Player.all()
    return players
  }

  async store ({ request, response }) {
  }

  async show ({params}) {
    const player = await Player.findOrFail(params.id)
    await player.load('images')
    return player
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = PlayerController
