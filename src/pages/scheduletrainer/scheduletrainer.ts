import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { NonrepeatPage } from "../../pages/nonrepeat/nonrepeat";
import { RepeatPage } from "../../pages/repeat/repeat";

@Component({
  selector: 'page-scheduletrainer',
  templateUrl: 'scheduletrainer.html',
})

export class ScheduletrainerPage {
  nonrepeatPage = NonrepeatPage;
  repeatPage = RepeatPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoBack() {
    this.navCtrl.pop();
  }

  onToggleColor1() {
  	if (document.getElementById('btn1').style.backgroundColor == 'blue') {
  		$('gray-box2').toggleClass('active');
  	}
  	$('#gray-box1').toggleClass('active');
  }

  onToggleColor2() {
  	if (document.getElementById('btn2').style.backgroundColor == 'blue') {
  		$('gray-box1').toggleClass('active');
  	}
  	$('#gray-box2').toggleClass('active');
  }

  onGoScheduleYes() {
    this.navCtrl.push(this.repeatPage);
  }

  onGoScheduleNo() {
    this.navCtrl.push(this.nonrepeatPage);
  }



}
