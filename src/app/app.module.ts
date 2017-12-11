import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { TrainingPage } from '../pages/training/training';
import { FeaturedPage } from '../pages/featured/featured';
import { TrainersPage } from '../pages/trainers/trainers';
import { ProfilePage } from '../pages/profile/profile';
import { TrainerPage } from '../pages/trainer/trainer';
import { SessionPage } from '../pages/session/session';
import { PaymentPage } from '../pages/payment/payment';
import { CreatePage } from '../pages/create/create';
import { SubtabPage } from '../pages/subtab/subtab';
import { BodyshapePage } from '../pages/bodyshape/bodyshape';
import { Bodyshape2Page } from '../pages/bodyshape2/bodyshape2';
import { CompletePage } from '../pages/complete/complete';
import { CaloriesPage } from '../pages/calories/calories';
import { CalendarPage } from '../pages/calendar/calendar';
import { ImagePage } from '../pages/image/image';
import { TcalendarPage } from '../pages/tcalendar/tcalendar';
import { LaunchPage } from '../pages/launch/launch';

import { TermsPage } from "../pages/terms/terms";
import { FeedbackPage } from "../pages/feedback/feedback";
import { FaqPage } from "../pages/faq/faq";
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { Signup0Page } from '../pages/signup0/signup0';
import { InformationPage } from '../pages/information/information';
import { GoalPage } from '../pages/goal/goal';
import { FilterPage } from '../pages/filter/filter';
import { TrainerfilterPage } from '../pages/trainerfilter/trainerfilter';
import { SortPage } from "../pages/sort/sort";
import { GeneralfilterPage } from '../pages/generalfilter/generalfilter';
import { AvailabletrainerPage } from '../pages/availabletrainer/availabletrainer';
import { ScheduletrainerPage } from '../pages/scheduletrainer/scheduletrainer';
import { NonrepeatPage } from "../pages/nonrepeat/nonrepeat";
import { RepeatPage } from "../pages/repeat/repeat";

import { PrivacyPage } from "../pages/privacy/privacy";
import { TrainingsService } from "../services/trainings";
import { AuthService } from '../services/auth';
import { ZoomPage } from "../pages/zoom/zoom";
import { SessionService } from "../services/session";
import { Data } from '../providers/data/data';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TrainingPage,
    FeaturedPage,
    TrainersPage,
    ProfilePage,
    TrainerPage,
    SessionPage,
    FeedbackPage,
    TermsPage,
    FaqPage,
    PrivacyPage,
    SigninPage,
    SignupPage,
    FilterPage,
    TrainerfilterPage,
    SortPage,
    ZoomPage,
    PaymentPage,
    CreatePage,
    SubtabPage,
    GeneralfilterPage,
    AvailabletrainerPage,
    ScheduletrainerPage,
    NonrepeatPage,
    RepeatPage,
    GoalPage,
    InformationPage,
    Signup0Page,
    BodyshapePage,
    Bodyshape2Page,
    CompletePage,
    CaloriesPage,
    CalendarPage,
    ImagePage,
    TcalendarPage,
    LaunchPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    TrainerPage,
    SessionPage,
    FeedbackPage,
    TermsPage,
    FaqPage,
    PrivacyPage,
    SigninPage,
    SignupPage,
    FilterPage,
    TrainerfilterPage,
    SortPage,
    ZoomPage,
    PaymentPage,
    CreatePage,
    SubtabPage,
    GeneralfilterPage,
    AvailabletrainerPage,
    ScheduletrainerPage,
    NonrepeatPage,
    RepeatPage,
    GoalPage,
    InformationPage,
    Signup0Page,
    BodyshapePage,
    Bodyshape2Page,
    CompletePage,
    CaloriesPage,
    CalendarPage,
    ImagePage,
    TcalendarPage,
    LaunchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TrainingsService,
    AuthService,
    SessionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
