import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController } from "ionic-angular"; 

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

	constructor(private loadingCtrl: LoadingController,
		private alertCtrl: AlertController) {}

	onSignup(form: NgForm) {

	}
}
