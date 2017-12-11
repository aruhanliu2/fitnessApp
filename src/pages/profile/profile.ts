import { Component } from '@angular/core';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { TermsPage } from "../../pages/terms/terms";
import { FeedbackPage } from "../../pages/feedback/feedback";
import { FaqPage } from "../../pages/faq/faq";
import { PrivacyPage } from "../../pages/privacy/privacy";
import { CreatePage } from '../../pages/create/create';

declare var cordova: any;

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	feedbackPage = FeedbackPage;
	termsPage = TermsPage;
	faqPage = FaqPage;
	privacyPage = PrivacyPage;
  createPage = CreatePage;

  lastImage: string = null;
  loading: Loading;

  constructor(public navCtrl: NavController, 
    public actionSheetCtrl: ActionSheetController, 
    public toastCtrl: ToastController, 
    public platform: Platform, 
    public loadingCtrl: LoadingController) {}


  onSubmit() {

  }

  onLoadPage(page: any) {
    this.navCtrl.push(page);
  }


 }