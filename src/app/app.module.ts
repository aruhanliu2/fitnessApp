import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Stripe } from '@ionic-native/stripe';
import { CardIO } from '@ionic-native/card-io';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { TrainingPage } from '../pages/training/training';
import { FeaturedPage } from '../pages/featured/featured';
import { TrainersPage } from '../pages/trainers/trainers';
import { ProfilePage } from '../pages/profile/profile';
import { FindtrainerPage} from '../pages/trainers/findtrainer/findtrainer';
import { MytrainerPage } from '../pages/trainers/mytrainer/mytrainer';
import { TrainerPage } from '../pages/trainer/trainer';
import { SessionPage } from '../pages/session/session';
import { RegisterPage } from '../pages/register/register';
import { CardPage } from '../pages/card/card';
import { TermsPage } from "../pages/terms/terms";
import { FeedbackPage } from "../pages/feedback/feedback";
import { FaqPage } from "../pages/faq/faq";
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

import { PrivacyPage } from "../pages/privacy/privacy";
import { TrainingsService } from "../services/trainings";


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TrainingPage,
    FeaturedPage,
    TrainersPage,
    ProfilePage,
    FindtrainerPage,
    MytrainerPage,
    TrainerPage,
    SessionPage,
    RegisterPage,
    CardPage,
    FeedbackPage,
    TermsPage,
    FaqPage,
    PrivacyPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TrainingPage,
    FeaturedPage,
    TrainersPage,
    ProfilePage,
    FindtrainerPage,
    MytrainerPage,
    TrainerPage,
    SessionPage,
    RegisterPage,
    CardPage,
    FeedbackPage,
    TermsPage,
    FaqPage,
    PrivacyPage,
    SigninPage,
    SignupPage
  ],
  providers: [
    Stripe,
    Http,
    CardIO,
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    Camera,
    FilePath,
    TrainingsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
