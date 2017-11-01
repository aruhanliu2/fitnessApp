import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Session } from "../../models/session";
import { CardPage } from "../../pages/card/card";

@Component({
  selector: 'page-session',
  templateUrl: 'session.html',
})
export class SessionPage {
	session;
	cardPage = CardPage;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

  	}

  	ngOnInit() {
  		this.session = this.navParams.data;
  	}

}
