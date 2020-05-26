import { detectCollision } from '../modules/collisionDetection.js'

export default class Brick {
  constructor (game, position) {
    this.gameWidth = game.gameWidth
    this.gameHeight = game.gameHeight

    this.game = game

    this.position = position
    this.width = 80
    this.height = 30

    this.markedForDeletion = false
  }
  draw (ctx) {
    ctx.beginPath()
    ctx.fillStyle = 'brown'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    ctx.fillStyle = 'coral'
    ctx.lineWidth = 4
    ctx.strokeStyle = 'red'
    ctx.moveTo(this.position.x + 2, this.position.y + 2)
    ctx.lineTo(this.position.x + this.width - 4, this.position.y + 2)
    ctx.closePath()
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(this.position.x + 2, this.position.y)
    ctx.lineTo(this.position.x + 2, this.position.y + this.height - 4)
    ctx.stroke()
    ctx.fillRect(this.position.x + 4, this.position.y + 4, this.width - 8, this.height - 8)
    ctx.closePath()
  }
  update (deltaTime) {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y

      this.markedForDeletion = true
    }
  }
}