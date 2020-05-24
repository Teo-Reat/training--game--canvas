import Paddle from './classes/paddle.js'
import InputHandler from './classes/input.js'
import Ball from './classes/ball.js'

const canvas = document.getElementById('gameScreen')
const ctx = canvas.getContext('2d')

const GAME_WIDTH = 800
const GAME_HEIGHT = 600

const paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)
const ball = new Ball()

new InputHandler(paddle)

let lastTime = 0

function gameLoop (timestamp) {
  const deltaTime = timestamp - lastTime
  lastTime = timestamp
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
  paddle.update(deltaTime)
  paddle.draw(ctx)

  ball.draw(ctx)

  requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)
