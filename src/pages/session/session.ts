import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Session } from "../../models/session";
import trainers from "../../data/trainers";
import { Trainer } from "../../models/trainer";
import { PaymentPage } from '../../pages/payment/payment';
import { SubtabPage } from '../../pages/subtab/subtab';

@Component({
  selector: 'page-session',
  templateUrl: 'session.html',
})
export class SessionPage {
	session: Session;
  paymentPage = PaymentPage;
  subtabPage: SubtabPage;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

  	}

    onGoBack() {
      this.navCtrl.pop();
    }

  	ngOnInit() {
  		this.session = this.navParams.data;
  	}
}
