'use strict'
const Image = use('App/Models/Image')
const Player = use('App/Models/Player')
const Helpers = use('Helpers')
class ImageController {
    async store({params,request}) {
        const players = await Player.findOrFail(params.id)

        const images = request.file('image', {
            types: ['image'],
            size: '2mb'
        })
        await images.moveAll(Helpers.tmpPath('uploads'), file => ({
                name: `${Date.now()}-${file.clientName}`
            }))

        if (!images.movedAll()) {
        return images.errors()
        }
        await Promise.all(
                images
                .movedList()
                .map(image => players.images().create({ path: image.fileName }))
        )
    }
    
}

module.exports = ImageController
