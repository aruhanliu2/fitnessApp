import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { TrainingsService } from "../../services/trainings";
import { Training } from "../../models/training";

@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
})
export class TrainingPage {
	training: Training;
	index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private alertCtrl: AlertController,
  	private trainingsService: TrainingsService) {
  }

  ngOnInit() {
  	this.training = this.navParams.get('training');
  	this.index = this.navParams.get('index');
  }

  onJoin() {

  }

  onViewSession() {

  }

  onCancel() {
  	const alert = this.alertCtrl.create({
  		title: 'Are you sure you want to cancel?',
  		buttons: [
  			{
  				text: 'Yes',
  				handler: () => {
  					this.trainingsService.removeTraining(this.index);
  					this.navCtrl.popToRoot();
  				}
  			},
  			{
  				text: 'No',
  				role: 'cancel'
  			}
  		]
  	});
  	alert.present();
  }

}
