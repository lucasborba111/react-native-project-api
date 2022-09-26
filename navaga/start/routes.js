'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.get('/users/:id', 'UserController.get')
Route.post('/session', 'SessionController.create')
Route.resource('players', 'PlayerController').middleware('auth')
Route.post('players/:id/images', 'ImageController.store').middleware('auth')