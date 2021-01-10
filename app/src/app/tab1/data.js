/*

12 signs
each cycle is ~2 days
NEED TO DISPLAY:
- start time / end time
- horoscope
*/

var horoscope = {
  aries: { description: "" },
  taurus: { description: "" },
  gemini: { description: "" },
  cancer: { description: "" },
  leo: { description: "" },
  virgo: { description: "" },
  libra: { description: "" },
  scorpio: { description: "" },
  sagittarius: { description: "" },
  capricorn: { description: "" },
  aquarius: { description: "" },
  pisces: { description: "" }
}

// https://api.farmsense.net/v1/moonphases/?d=1610313113
// [{"Error":0,"ErrorMsg":"success","TargetDate":"1610313113","Moon":["Moon after Yule"],"Index":27,"Age":27.02365112732734786504806834273040294647216796875,"Phase":"Waning Crescent","Distance":368141.4099999999743886291980743408203125,"Illumination":0.070000000000000006661338147750939242541790008544921875,"AngularDiameter":0.54098276520653254539894305708003230392932891845703125,"DistanceToSun":147122799.29533100128173828125,"SunAngularDiameter":0.542099181703994847936201040283776819705963134765625}]
let test = [{ "Error": 0, "ErrorMsg": "success", "TargetDate": "1350526582", "Moon": ["Hunter's\/Harvest Moon"], "Index": 2, "Age": 2.955595346926350064364896752522327005863189697265625, "Phase": "Waxing Crescent", "Distance": 363325.21999999997206032276153564453125, "Illumination": 0.1000000000000000055511151231257827021181583404541015625, "AngularDiameter": 0.5481539536148296587469985752250067889690399169921875, "DistanceToSun": 149016616.799832403659820556640625, "SunAngularDiameter": 0.53520976935835051779832838292350061237812042236328125 }]
//
const getCurrentDate = (offset) => {
  var today = new Date();
  var dd = today.getUTCDate();
  var mm = today.getUTCMonth() + 1;
  var yyyy = today.getFullYear();
  var minutes = today.getUTCMinutes();
  var hours = today.getUTCHours();
  console.log(minutes)
  console.log(hours)
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return `${yyyy}-${mm}-${dd} ${hours}:${minutes}`;
}


var calendar = [{
  startDate: '2021-01-09 11:15',
  endDate: '2021-01-11 13:30',
  sign: 'sagittarius',
}, {
  startDate: '2021-01-11 13:30',
  endDate: '2021-01-13 16:44',
  sign: 'capricorn',
}, {
  startDate: '2021-01-13 16:44',
  endDate: '2021-01-15 22:17',
  sign: 'aquarius',
}, {
  startDate: '2021-01-15 22:17',
  endDate: '2021-01-18 7:08',
  sign: 'pisces',
}, {
  startDate: '2021-01-18 7:08',
  endDate: '2021-01-20 18:56',
  sign: 'aries',
}, {
  startDate: '2021-01-20 18:56',
  endDate: '2021-01-23 7:43',
  sign: 'taurus',
}, {
  startDate: '2021-01-23 7:43',
  endDate: '2021-01-25 18:52',
  sign: 'gemini',
}, {
  startDate: '2021-01-25 18:52',
  endDate: '2021-01-28 2:54',
  sign: 'cancer',
}, {
  startDate: '2021-01-28 2:54',
  endDate: '2021-01-30 8:03',
  sign: 'leo',
}]

let lastIndex = 0;

const getDay = () => {
  // get current date
  // yy-mm-dd HH:mm
  let today = getCurrentDate()
  for (let day of calendar) {
    if (today >= day.startDate && today < day.endDate) {
      // this is the current day
      return day;
    }
  }
  // base case
  return {
    startDate: "",
    endDate: "",
    sign: "Unknown Sign"
  }
}

console.log(getDay());
