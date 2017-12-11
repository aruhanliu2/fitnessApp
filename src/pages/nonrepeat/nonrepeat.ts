import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-nonrepeat',
  templateUrl: 'nonrepeat.html',
})
export class NonrepeatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoBack() {
  	this.navCtrl.pop();
  }

}
