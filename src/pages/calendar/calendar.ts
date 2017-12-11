import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoBack() {
  	this.navCtrl.pop();
  }

}
