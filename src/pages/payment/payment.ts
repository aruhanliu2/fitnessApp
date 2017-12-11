import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { TrainingsService } from "../../services/trainings";
import { TrainingPage } from '../../pages/training/training';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})

export class PaymentPage implements OnInit {
	session;
  trainingPage = TrainingPage;
  constructor(private trainingsService: TrainingsService, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams) {
  }

  ngOnInit() {
  	this.session = this.navParams.data;
  }
  onGoBack() {
    this.navCtrl.pop();
  }

  completePurchase() {
  	const alert = this.alertCtrl.create({
  		title: 'Hooray!',
      	message: "You've registered this session.",
  		buttons: [
  			{
  				text: 'Done',
  				role: 'cancel'
  			}
  		]
  	});
  	alert.present();
    this.navCtrl.pop();
    this.navCtrl.pop();
    //this.navCtrl.push(this.trainingPage);
    this.trainingsService.addTraining(this.session);
  }

}
