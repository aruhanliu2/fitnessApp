import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, MenuController } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { Signup0Page } from '../pages/signup0/signup0';
import { LaunchPage } from '../pages/launch/launch';
import { Bodyshape2Page } from '../pages/bodyshape2/bodyshape2';

import firebase from 'firebase';
import { AuthService } from '../services/auth';

import { GoalPage } from '../pages/goal/goal';
import { InformationPage } from '../pages/information/information';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;
  signinPage = SigninPage;
  signup0Page = Signup0Page;
  launchPage = LaunchPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(private authService: AuthService, platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    
    firebase.initializeApp({
      apiKey: "AIzaSyCwmcAVD8S_M0ooSDaluT8NAMlYBczTtc8",
      authDomain: "fitnessapp-a90fb.firebaseapp.com" 
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
        this.rootPage = TabsPage;
      } else {
        this.isAuthenticated = false;
        this.rootPage = LaunchPage
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(Signup0Page);
  }
}

