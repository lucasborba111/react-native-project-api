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

  async store ({ auth ,request, response }) {
    const id = auth.user.id
    const data = request.only(['nickname', 'position'])
    const player = await Player.create({...data, user_id: id})
    return player
  }

  async show ({params}) {
    const player = await Player.findOrFail(params.id)
    await player.load('images')
    return player
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params , auth, response }) {
    const player = await Player.findOrFail(params.id)

    if(player.user_id !== auth.user.id){
      return response.status(401).send({error: 'not authorized'})
    }
    await player.delete()
  }
}

module.exports = PlayerController
