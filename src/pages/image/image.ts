import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrainerPage } from "../../pages/trainer/trainer";

@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {
  trainerPage = TrainerPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack() {
  	this.navCtrl.pop();
  }

}
