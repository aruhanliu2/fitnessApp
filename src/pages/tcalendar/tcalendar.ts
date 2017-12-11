import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tcalendar',
  templateUrl: 'tcalendar.html',
})
export class TcalendarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TcalendarPage');
  }

  onGoBack() {
  	this.navCtrl.pop();
  }

}
