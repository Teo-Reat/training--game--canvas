export default class Ball {
  constructor () {
    this.image = document.getElementById('ball')

    this.speed = { x: 2, y: 2 }
  }

  draw (ctx) {
    ctx.drawImage(this.image, 20, 20, 24, 24)
  }

  update () {

  }
}
