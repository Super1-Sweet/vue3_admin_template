export const getTime = () => {
  let msg = ''
  let time = new Date().getHours()
  if (time <= 9) {
    msg = '早上好'
  } else if (time > 9 && time <= 13) {
    msg = '中午好'
  } else if (time > 13 && time <= 18) {
    msg = '下午好'
  } else {
    msg = '晚上好'
  }
  return msg
}
