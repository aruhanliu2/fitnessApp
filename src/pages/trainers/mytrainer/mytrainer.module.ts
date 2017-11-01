import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytrainerPage } from './mytrainer';

@NgModule({
  declarations: [
    MytrainerPage,
  ],
  imports: [
    IonicPageModule.forChild(MytrainerPage),
  ],
})
export class MytrainerPageModule {}
