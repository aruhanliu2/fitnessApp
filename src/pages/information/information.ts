import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BodyshapePage } from '../../pages/bodyshape/bodyshape';
import { Bodyshape2Page } from '../../pages/bodyshape2/bodyshape2';
import * as $ from 'jquery';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {
	bodyshapePage = BodyshapePage;
	bodyshape2Page = Bodyshape2Page;
	mode: '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  onGoBack() {
  	this.navCtrl.pop();
  }

  onToggle1() {
    $('#btn1').toggleClass('selected');
    $('#t1').toggleClass('big-text selected-text');
  }

  onToggle2() {
    $('#btn2').toggleClass('selected');
    $('#t2').toggleClass('big-text selected-text');
  }

  onGoToBodyShape() {
  	if (document.getElementById('t1').style.color == '#FC3F1B;') {
  		console.log(document.getElementById('t1').style.color);
  		this.navCtrl.push(this.bodyshapePage, {mode: 'female'});

  	} else {
  		this.navCtrl.push(this.bodyshape2Page, {mode: 'male'});
  		console.log(document.getElementById('btn1').style);
  	}
  }



}
