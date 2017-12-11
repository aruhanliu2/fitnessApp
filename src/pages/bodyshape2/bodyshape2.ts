import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompletePage } from '../../pages/complete/complete';

@Component({
  selector: 'page-bodyshape2',
  templateUrl: 'bodyshape2.html',
})
export class Bodyshape2Page {
	completePage = CompletePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onComplete() {
  	this.navCtrl.push(this.completePage);
  }
  onGoBack() {
  	this.navCtrl.pop();
  }

  onSkip() {
  	this.navCtrl.push(this.completePage);
  }

}
