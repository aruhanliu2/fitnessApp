import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Trainer } from "../../models/trainer";


@Component({
  selector: 'page-trainer',
  templateUrl: 'trainer.html',
})
export class TrainerPage implements OnInit {
	trainer;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

  	}

  	ngOnInit() {
  		this.trainer = this.navParams.data;
  	}

}
