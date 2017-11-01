import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';


/**
 * Generated class for the Card page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  cardinfo: any = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  }
  constructor(private navCtrl: NavController, private navParams: NavParams, private stripe: Stripe, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Card');
  }

  onPay() {
    this.stripe.setPublishableKey('pk_test');
    this.stripe.createCardToken(this.cardinfo).then((token) => {
      var data = 'stripetoken=' + token + '&amount=50';
      var headers = new Headers();
      headers.append('Conent-Type', 'application/x-www-form-urlencoded');
      this.http.post('http://localhost:3333/processpay', data, { headers: headers }).subscribe((res) => {
        if (res.json().success)
        alert('transaction Successfull!!')  
      })
    })
  }
    
}