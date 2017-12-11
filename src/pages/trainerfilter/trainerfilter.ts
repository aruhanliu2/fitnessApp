import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-trainerfilter',
  templateUrl: 'trainerfilter.html',
})
export class TrainerfilterPage implements OnInit {
  mode = '';
  sessions;
  structure1: any = { lower: 33, upper: 60 };
  structure2: any = { lower: 33, upper: 60 };
  structure3: any = { lower: 33, upper: 60 };

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit() {
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
    onToggle12() {
        $('#btn12').toggleClass('selected');
    $('#t12').toggleClass('gray-body selected-text');
  }
    onToggle13() {
        $('#btn13').toggleClass('selected');
    $('#t13').toggleClass('gray-body selected-text');
  }

}
