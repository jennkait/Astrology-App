import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // films: Observable<any>;
  data = {}
  todaysInfo;
  calendar = {
    '2020-10-24': {
      signs: ['Aquarius'],
      startTime: ''
    },
    '2020-10-25': {
      signs: ['Aquarius', 'Pisces'],
      startTime: '2020-10-25 21:19'
    },
    '2020-10-26': {
      signs: ['Pisces'],
      startTime: ''
    },
    '2020-10-27': {
      signs: ['Pisces'],
      startTime: ''
    },
    '2020-10-28': {
      signs: ['Pisces', 'Aries'],
      startTime: '2020-10-28 08:45'
    },
    '2020-10-29': {
      signs: ['Aries'],
      startTime: ''
    },
    '2020-10-30': {
      signs: ['Aries', 'Taurus'],
      startTime: '2020-10-30 21:19'
    },
    '2020-10-31': {
      signs: ['Taurus'],
      startTime: ''
    },
    '2020-11-01': {
      signs: ['Taurus'],
      startTime: ''
    },
    '2020-11-02': {
      signs: ['Taurus', 'Gemini'],
      startTime: '2020-11-02 10:00'
    },
    '2020-11-03': {
      signs: ['Gemini'],
      startTime: ''
    },
    '2020-11-04': {
      signs: ['Gemini', 'Cancer'],
      startTime: '2020-11-04 21:46'
    },
    '2020-11-05': {
      signs: ['Cancer'],
      startTime: ''
    },
    '2020-11-06': {
      signs: ['Cancer'],
      startTime: ''
    },
    '2020-11-07': {
      signs: ['Cancer', 'Leo'],
      startTime: '2020-11-07 07:19'
    },
    '2020-11-08': {
      signs: ['Leo'],
      startTime: ''
    },
    '2020-11-09': {
      signs: ['Leo', 'Virgo'],
      startTime: '2020-11-09 13:30'
    },
    '2020-11-10': {
      signs: ['Virgo'],
      startTime: ''
    },
    '2020-11-11': {
      signs: ['Virgo', 'Libra'],
      startTime: '2020-11-11 16:10'
    },
    '2020-11-12': {
      signs: ['Libra'],
      startTime: ''
    },
    '2020-11-13': {
      signs: ['Libra', 'Scorpio'],
      startTime: '2020-11-13 16:19'
    },
    '2020-11-14': {
      signs: ['Scorpio'],
      startTime: ''
    },
    '2020-11-15': {
      signs: ['Scorpio', 'Sagittarius'],
      startTime: '2020-11-15 15:47'
    },
    '2020-11-16': {
      signs: ['Sagittarius'],
      startTime: ''
    },
    '2020-11-17': {
      signs: ['Sagittarius', 'Capricorn'],
      startTime: '2020-11-17 16:35'
    },
    '2020-11-18': {
      signs: ['Capricorn'],
      startTime: ''
    },
    '2020-11-19': {
      signs: ['Capricorn', 'Aquarius'],
      startTime: '2020-11-19 20:25'
    },
    '2020-11-20': {
      signs: ['Aquarius'],
      startTime: ''
    },
    '2020-11-21': {
      signs: ['Aquarius'],
      startTime: ''
    },
    '2020-11-22': {
      signs: ['Aquarius', 'Pisces'],
      startTime: '2020-11-22 04:06'
    },
    '2020-11-23': {
      signs: ['Pisces'],
      startTime: ''
    },
    '2020-11-24': {
      signs: ['Pisces', 'Aries'],
      startTime: '2020-11-24 15:05'
    },
    '2020-11-25': {
      signs: ['Aries'],
      startTime: ''
    },
    '2020-11-26': {
      signs: ['Aries'],
      startTime: ''
    },
    '2020-11-27': {
      signs: ['Aries', 'Taurus'],
      startTime: '2020-11-27 03:43'
    },
    '2020-11-28': {
      signs: ['Taurus'],
      startTime: ''
    },
    '2020-11-29': {
      signs: ['Taurus', 'Gemini'],
      startTime: '2020-11-29 16:16'
    },
    '2020-11-30': {
      signs: ['Gemini'],
      startTime: ''
    },
    '2020-12-01': {
      signs: ['Gemini'],
      startTime: ''
    },
    '2020-12-02': {
      signs: ['Gemini', 'Cancer'],
      startTime: '2020-12-02 03:33'
    },
    '2020-12-03': {
      signs: ['Cancer'],
      startTime: ''
    },
    '2020-12-04': {
      signs: ['Cancer', 'Leo'],
      startTime: '2020-12-04 12:53'
    },
    '2020-12-05': {
      signs: ['Leo'],
      startTime: ''
    },
    '2020-12-06': {
      signs: ['Leo', 'Virgo'],
      startTime: ''
    },
    '2020-12-07': {
      signs: ['Virgo'],
      startTime: ''
    },
    '2020-12-08': {
      signs: ['Virgo'],
      startTime: ''
    },
    '2020-12-09': {
      signs: ['Virgo', 'Libra'],
      startTime: '2020-12-09 00:02'
    },
    '2020-12-10': {
      signs: ['Libra'],
      startTime: ''
    },
    '2020-12-11': {
      signs: ['Libra', 'Scorpio'],
      startTime: '2020-12-11 01:59'
    },
    '2020-12-12': {
      signs: ['Scorpio'],
      startTime: ''
    },
    '2020-12-13': {
      signs: ['Scorpio', 'Sagittarius'],
      startTime: '2020-12-13 02:40'
    },
    '2020-12-14': {
      signs: ['Sagittarius'],
      startTime: ''
    },
    '2020-12-15': {
      signs: ['Sagittarius', 'Capricorn'],
      startTime: '2020-12-15 03:35'
    },
    '2020-12-16': {
      signs: ['Capricron'],
      startTime: ''
    },
    '2020-12-17': {
      signs: ['Capricorn', 'Aquarius'],
      startTime: '2020-12-17 06:27'
    },
    '2020-12-18': {
      signs: ['Aquarius'],
      startTime: ''
    },
    '2020-12-19': {
      signs: ['Aquarius', 'Pisces'],
      startTime: '2020-12-19 12:39'
    },
    '2020-12-20': {
      signs: ['Pisces'],
      startTime: ''
    },
    '2020-12-21': {
      signs: ['Pisces', 'Aries'],
      startTime: '2020-12-21 22:33'
    },
    '2020-12-22': {
      signs: ['Aries'],
      startTime: ''
    },
    '2020-12-23': {
      signs: ['Aries'],
      startTime: ''
    },
    '2020-12-24': {
      signs: ['Aries', 'Taurus'],
      startTime: '2020-12-24 10:56'
    },
    '2020-12-25': {
      signs: ['Taurus'],
      startTime: ''
    },
    '2020-12-26': {
      signs: ['Taurus', 'Gemini'],
      startTime: '2020-12-26 23:33'
    },
    '2020-12-27': {
      signs: ['Gemini'],
      startTime: ''
    },
    '2020-12-28': {
      signs: ['Gemini'],
      startTime: ''
    },
    '2020-12-29': {
      signs: ['Gemini', 'Cancer'],
      startTime: '2020-12-29 10:29'
    },
    '2020-12-30': {
      signs: ['Cancer'],
      startTime: ''
    },
    '2020-12-31': {
      signs: ['Cancer', 'Leo'],
      startTime: '2020-12-31 18:58'
    }


  }

  constructor(private httpClient: HttpClient) {
    // this.data = {
    //   signs: ['Virgo','Libra'],
    //   startTime: '2020-10-15 05:54'
    // }
    this.data = this.getMoonSign();
  }

  getDateData(dateKey?: any): any {
    if (dateKey && this.calendar && this.calendar[dateKey]) {
      // if found, set moonSign to found sign
      return this.calendar[dateKey];
    } else {
      return false; // error case
    }
  }

  getStartTime(forward: any): any {
    // TODO go back in time for start time
    console.log('1')
    var i = forward ? 1 : -1;
    console.log('2')
    let startTime = false;
    console.log('3')

    while (!startTime) {
      let daysInfo = this.getDateData(this.getDateKey(i));
      console.log('daysInfo', daysInfo)
      if (daysInfo.startTime) {
        startTime = daysInfo.startTime;
      }
      if (forward) i++;
      else i--;
    }
    return startTime;
  }

  getMoonSign2() {
    return { sign: 'None' }
  }

  getMoonSign(): any {
    // base case
    let moonData = {
      sign: 'None',
      startTime: '',
      endTime: ''
    }

    console.log('test1')
    let dateKey = this.getDateKey(); // yyyy-mm-dd


    let todaysInfo = this.getDateData(dateKey);

    console.log('test2', dateKey)
    console.log('test2', todaysInfo)

    if (!todaysInfo) {
      return moonData; // TODO what to do
    }

    console.log('todaysInfo', todaysInfo)

    if (todaysInfo.signs.length == 1) {
      console.log('here')
      moonData.sign = todaysInfo.signs[0];
      // return moonData;
      // go back in time for start time
      moonData.startTime = this.getStartTime(false);
      moonData.endTime = this.getStartTime(true);
    } else {
      var now = new Date();
      var startTime = new Date(todaysInfo.startTime);
      if (now < startTime) {
        moonData.sign = todaysInfo.signs[0]
        moonData.endTime = todaysInfo.startTime;
        moonData.startTime = this.getStartTime(false);
      } else {
        moonData.sign = todaysInfo.signs[1]
        moonData.startTime = todaysInfo.startTime;
        moonData.endTime = this.getStartTime(true);
      }
    }
    return moonData;
  }

  // returns current date like yyyy-mm-dd
  getDateKey(offset?: any) {
    var today = new Date();
    if (offset != null) {
      today.setDate(today.getDate() + offset)
    }
    var dd: any = today.getDate();
    var mm: any = today.getMonth() + 1;
    var yyyy: any = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return yyyy + '-' + mm + '-' + dd;
  }

}
