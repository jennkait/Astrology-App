function getDateKey() {

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  console.log('day', dd)
  console.log('month', mm)
  console.log('day', yyyy)
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return yyyy + '-' + mm + '-' + dd;
}

function getMoonSign(todaysInfo) {
  // example data
  // todaysInfo = {
  //   signs: ['Taurus'],
  //   startTime: ''
  // };
  // returns 'Taurus'

  // base case
  if (todaysInfo.signs.length == 1) {
    return todaysInfo.signs[0]
  }

  // case where more than one
  var now = new Date();
  var startTime = new Date(todaysInfo.startTime);
  if (now < startTime) {
    return todaysInfo.signs[0]
  }
  return todaysInfo.signs[1]
}

// invoking the test
let todaysInfo = {
  signs: ['Aries', 'Tarurusd'],
  startTime: '2020-02-26 20:33'
};
console.log(getMoonSign(todaysInfo))
