import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { LoadingController, AlertController, NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  tabsPage = TabsPage;
	constructor(private navCtrl: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private authService: AuthService) {}
  onSignin(form: NgForm) {
    this.navCtrl.push(this.tabsPage);
  	/*const loading = this.loadingCtrl.create({
  		content: 'Signing you in...'
  	});
  	loading.present();
  	
  	this.authService.signin(form.value.email, form.value.password)
  	.then(data => {
  		loading.dismiss();
  	})
  	.catch(error => {
  		loading.dismiss();
  		const alert = this.alertCtrl.create({
  			title: 'Signin failed!',
  			message: error.message,
  			buttons: ['Ok']
  		});
  		alert.present();
  	});
  }*/
}
}