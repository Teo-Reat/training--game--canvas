export function detectCollision (ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.radius
  let topOfBall = ball.position.y - ball.radius

  let topOfObject = gameObject.position.y
  let leftSideOfObject = gameObject.position.x
  let bottomSideOfObject = gameObject.position.y + gameObject.height
  let rightSideOfObject = gameObject.position.x + gameObject.width

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomSideOfObject &&
    ball.position.x + ball.radius >= leftSideOfObject &&
    ball.position.x - ball.radius <= rightSideOfObject
  ) {
    return true
  } else {
    return false
  }
}