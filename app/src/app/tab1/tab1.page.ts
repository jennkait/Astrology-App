import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // films: Observable<any>;
  sign = 'None'
  constructor(private httpClient: HttpClient) {

    this.httpClient.get('http://localhost:8001/moon-sign').subscribe(data => {
      console.log('my data: ', data);
      this.sign = data.test
    })
  }

}
