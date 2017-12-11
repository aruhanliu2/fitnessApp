import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-repeat',
  templateUrl: 'repeat.html',
})
export class RepeatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoBack() {
  	this.navCtrl.pop();
  }

  onToggle1() {
  	$('#btn1').toggleClass('selected');
  	$('#t1').toggleClass('gray-body selected-text');
  }

  onToggle2() {
  	$('#btn2').toggleClass('selected');
  	$('#t2').toggleClass('gray-body selected-text');
  }
  onToggle3() {
  	$('#btn3').toggleClass('selected');
  	$('#t3').toggleClass('gray-body selected-text');
  }
    onToggle4() {
  	$('#btn4').toggleClass('selected');
  	$('#t4').toggleClass('gray-body selected-text');
  }
    onToggle5() {
  	$('#btn5').toggleClass('selected');
  	$('#t5').toggleClass('gray-body selected-text');
  }
    onToggle6() {
  	$('#btn6').toggleClass('selected');
  	$('#t6').toggleClass('gray-body selected-text');
  }
    onToggle7() {
  	$('#btn7').toggleClass('selected');
  	$('#t7').toggleClass('gray-body selected-text');
  }
}
