export default class Ball {
  constructor (game) {
    this.gameWidth = game.gameWidth
    this.gameHeight = game.gameHeight
    this.game = game

    this.speed = { x: 4, y: 4 }
    this.position = { x: 20, y: 20 }

    this.radius = 8
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }

  update (deltaTime) {
    this.position.x += this.speed.x
    this.position.y += this.speed.y

    // wall on left or right
    if (this.position.x + this.radius > this.gameWidth || this.position.x - this.radius < 0) {
      this.speed.x = -this.speed.x
    }
    // wall on top or bottom
    if (this.position.y + this.radius > this.gameHeight || this.position.y - this.radius < 0) {
      this.speed.y = -this.speed.y
    }
    // check collision with paddle
    let bottomOfBall = this.position.y + this.radius
    let topOfPaddle = this.game.paddle.position.y
    let leftSideOfPaddle = this.game.paddle.position.x
    let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width

    if (bottomOfBall >= topOfPaddle &&
    this.position.x >= leftSideOfPaddle &&
    this.position.x + this.radius <= rightSideOfPaddle) {
      this.speed.y = -this.speed.y
      this.position.y = this.game.paddle.position.y - this.radius
    }
  }
}
