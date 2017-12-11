import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../../pages/signup/signup';
import { SigninPage } from '../../pages/signin/signin';

@Component({
  selector: 'page-signup0',
  templateUrl: 'signup0.html',
})
export class Signup0Page {
	signupPage = SignupPage;
	signinPage = SigninPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToSignIn() {
  	this.navCtrl.push(this.signinPage);
  }

  onGoToSignUp() {
	this.navCtrl.push(this.signupPage);
  }

}
