import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-calories',
  templateUrl: 'calories.html',
})
export class CaloriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoBack() {
  	this.navCtrl.pop();
  }
}
