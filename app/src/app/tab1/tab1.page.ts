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
  calendar = [{
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

  constructor(private httpClient: HttpClient) {
    // this.data = {
    //   signs: ['Virgo','Libra'],
    //   startTime: '2020-10-15 05:54'
    // }
    this.data = this.getMoonSign();
  }

  getCurrentDate() {
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

  getMoonSign(): any {
    let today = this.getCurrentDate()
    for (let day of this.calendar) {
      if (today >= day.startDate && today < day.endDate) {
        // this is the current day
        day.sign = day.sign[0].toUpperCase() + day.sign.slice(1)
        return day;
      }
    }
    // base case
    return {
      startDate: "",
      endDate: "",
      sign: "None"
    }

  }
}
