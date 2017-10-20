// 倒计时(60s)
/**
 * 设置倒计时
 * @author ZhengXiaowei(503325017@qq.com)
 * @export
 * @param {any} target 目标元素
 */
let seconds = 60
export function countDown (target) {
  if (seconds === 0) {
    target.removeAttribute('disabled')
    target.innerText = '验证码'
    seconds = 60
  } else {
    target.setAttribute('disabled', true)
    target.innerText = seconds + '秒后重新发送'
    seconds--
    setTimeout(function () {
      countDown(target)
    }, 1000)
  }
}
