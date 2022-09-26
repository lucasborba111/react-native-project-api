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

  async store ({ auth,params ,request, response }) {
    const id = auth.user.id
    const exist = await Player.findBy('user_id', id)

    if (exist) {
      return response.status(401).send({error: 'Você já possui um perfil'})
    } else {
          const data = request.only(['nickname', 'position'])
          const player = await Player.create({...data, user_id: id})
          return player
    }
  }

  async show ({params}) {
    const player = await Player.findOrFail(params.id)
    await player.load('images')
    return player
  }

  async update ({ auth,params, request, response }) {
    const player = await Player.findOrFail(params.id)
    if(player.user_id !== auth.user.id){
      return response.status(401).send({error: 'not authorized'})
    }
    const data = request.only(['nickname', 'position'])
    player.merge(data)
    await player.save()
    return player
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
