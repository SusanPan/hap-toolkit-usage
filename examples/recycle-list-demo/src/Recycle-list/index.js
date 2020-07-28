/**
 * 循环惯性移动，直到速度为0停止
 *
 * @param speed 速度
 * @param a 加速度
 * @param t 时间间隔
 * @param moveFunction 调用移动函数，参数为移动距离
 */

export function loopInertiaMove(speed, a, t, moveFunction = function(){}){
  if(speed !== 0) {
    setTimeout(() => {
      if(speed > 0) {
        let newSpeed = speed - a * t
        if(newSpeed < 0){
          newSpeed = 0
        }
        speed = newSpeed
        moveFunction(newSpeed * t)
      } else {
        let newSpeed = speed + a * t
        if(newSpeed > 0){
          newSpeed = 0
        }
        speed = newSpeed
        moveFunction(newSpeed * t)
      }
      loopInertiaMove(speed, a, t, moveFunction)
    }, t)
  }
}
