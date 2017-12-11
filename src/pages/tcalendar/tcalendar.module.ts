import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TcalendarPage } from './tcalendar';

@NgModule({
  declarations: [
    TcalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(TcalendarPage),
  ],
})
export class TcalendarPageModule {}
