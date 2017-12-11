import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController } from "ionic-angular"; 
import { AuthService } from '../../services/auth';
import { GoalPage } from '../../pages/goal/goal';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
	goalPage = GoalPage;
  constructor(private authService: AuthService, private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {}

  onSignup(form: NgForm) {
  	this.authService.signup(form.value.email, form.value.password)
  	.then(data => console.log(data))
  	.catch(error => console.log(error));
  }
}
