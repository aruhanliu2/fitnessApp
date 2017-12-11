import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Trainer } from "../../models/trainer";
import freeSessions from '../../data/free-sessions';
import { ImagePage } from '../../pages/image/image';
import { TcalendarPage } from '../../pages/tcalendar/tcalendar';


@Component({
  selector: 'page-trainer',
  templateUrl: 'trainer.html',
})
export class TrainerPage implements OnInit {
	trainer;
	groupSessions;
  imagePage = ImagePage;
  segment: string = 'info';
  tcalendarPage = TcalendarPage;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

  	}

  	ngOnInit() {
  		this.trainer = this.navParams.data;
  		this.groupSessions = freeSessions;
  	}
  	onGoBack() {
  		this.navCtrl.pop();
  	}

    viewImage() {
      this.navCtrl.push(this.imagePage);
    }

}
