import Paddle from './paddle.js'
import Ball from './ball.js'
import InputHandler from './input.js'
import Brick from './brick.js'
import { buildLevel, level1 } from '../modules/levels.js'

const GAME_STATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAME_OVER: 3
}

export default class Game {
  constructor (gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
  }
  start () {
    this.gameState = GAME_STATE.PAUSED
    this.paddle = new Paddle(this)
    this.ball = new Ball(this)

    let bricks = buildLevel(this, level1)

    this.gameObjects = [this.ball, this.paddle, ...bricks]

    new InputHandler(this.paddle, this)
  }
  update(deltaTime) {
    if (this.gameState === GAME_STATE.PAUSED) return

    this.gameObjects.forEach((object) => object.update(deltaTime))
    this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion)
  }
  draw (ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx))

    if (this.gameState === GAME_STATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight)
      ctx.fillStyle = 'rgba(0, 0, 0, .5)'
      ctx.fill()

      ctx.font = '30px Arial'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText('Paused', this.gameWidth / 2, this.gameHeight / 2)
    }
  }
  togglePause () {
    if (this.gameState === GAME_STATE.PAUSED) {
      this.gameState = GAME_STATE.RUNNING
    } else {
      this.gameState = GAME_STATE.PAUSED
    }
  }
}