import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, NavController, NavParams } from 'ionic-angular';
import { TrainingsService } from "../../services/trainings";
import { Training } from "../../models/training";
import { SessionPage } from "../../pages/session/session";
import myTrainings from "../../data/my-trainings";
import { ZoomPage } from "../../pages/zoom/zoom";
import { CaloriesPage } from '../../pages/calories/calories';
import { CalendarPage } from '../../pages/calendar/calendar';

@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
})
export class TrainingPage implements OnInit{
  myTrainings;
	training: Training;
	index: number;
  zoomPage = ZoomPage;
  sessionPage = SessionPage;
  caloriesPage = CaloriesPage;
  calendarPage = CalendarPage;
  appToken = "dfd";
  userID = "dfd"
  encryptionSecret = "fdf";
  enrollButton: null;
  authButton: null;
  listItems: Training[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private alertCtrl: AlertController,
    private toastCtrl: ToastController,
  	private trainingsService: TrainingsService) {

  }

  ngOnInit() {
  	this.training = this.navParams.get('training');
  	this.index = this.navParams.get('index');
    this.myTrainings = myTrainings;
  }

  ionViewWillEnter() {
    this.loadItems();
    console.log(myTrainings);
    console.log(this.listItems);
  }

  private loadItems() {
    this.listItems = this.trainingsService.getTrainings();
  }

  onJoin() {

  }

  onViewSession() {

  }

  onCancel() {
  	const alert = this.alertCtrl.create({
  		title: 'Are you sure you want to cancel?',
      message: "You can't get refund when cancelled 1 hour prior to the start time.",
  		buttons: [
  			{
  				text: 'Yes',
  				handler: () => {
            const toast = this.toastCtrl.create({
              message: 'You cancelled this session.',
              duration: 3000,
              cssClass: "toastClass",
              position: 'top'
            });
            toast.present();
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

  onCancelSuccessful() {

  }

}
