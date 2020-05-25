export default class Paddle {
  constructor (game) {
    this.gameWidth = game.gameWidth
    this.width = 150
    this.height = 15

    this.maxSpeed = 5
    this.speed = 0

    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10
    }
  }

  moveLeft () {
    if (this.position.x !== 0) this.speed = -this.maxSpeed
  }

  moveRight () {
    if (this.position.x !== this.gameWidth - this.width) this.speed = this.maxSpeed
  }

  stop () {
    this.speed = 0
  }

  draw (ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update () {
    this.position.x += this.speed
    if (this.position.x === 0 || this.position.x === this.gameWidth - this.width) this.speed = 0
  }
}
