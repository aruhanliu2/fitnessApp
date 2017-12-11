import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../../pages/tabs/tabs";
import { FeaturedPage } from "../../pages/featured/featured";

@Component({
  selector: 'page-complete',
  templateUrl: 'complete.html',
})
export class CompletePage {
	featuredPage = FeaturedPage;
	tabsPage = TabsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
