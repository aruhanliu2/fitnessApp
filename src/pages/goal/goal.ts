import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InformationPage } from "../../pages/information/information";

@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html',
})
export class GoalPage {
	informationPage = InformationPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalPage');
  }


}
