import { Component } from '@angular/core';
import { Stripe } from '@ionic-native/stripe';
import { CardIO } from '@ionic-native/card-io';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private stripe: Stripe,
  	private cardIO: CardIO) {
  
  }

}
