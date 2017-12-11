import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signup0Page } from '../../pages/signup0/signup0';

@Component({
  selector: 'page-launch',
  templateUrl: 'launch.html',
})
export class LaunchPage {
	signup0Page = Signup0Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
