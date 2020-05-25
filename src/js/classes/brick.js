export default class Brick {
  constructor (game, position) {
    this.gameWidth = game.gameWidth
    this.gameHeight = game.gameHeight

    this.game = game

    this.position = position
    this.width = 80
    this.height = 30
  }
  draw (ctx) {
    ctx.beginPath()
    ctx.lineWidth = 6
    ctx.fillStyle = 'brown'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    ctx.fill()
    ctx.closePath()
  }
  update (deltaTime) {

  }
}