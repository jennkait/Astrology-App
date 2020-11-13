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
  constructor(private httpClient: HttpClient) {
this.data = {
  signs: ['Virgo','Libra'],
  startTime: '2020-10-15 05:54'
}
    // this.httpClient.get('https://us-central1-astromoon.cloudfunctions.net/api/moon-sign').subscribe(data => {
    //   console.log('my data: ', data);
    //   // data = { sign, startTime, endTime }
    //   this.data = data;
    // })
  }

}
