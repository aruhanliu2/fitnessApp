import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import freeSessions from '../../data/free-sessions';
import pickedSessions from '../../data/picked-sessions';
import * as $ from 'jquery';

@Component({
  selector: 'page-sort',
  templateUrl: 'sort.html',
})
export class SortPage {
	mode = '';
  sessions;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.mode = this.navParams.get('mode');
    if (this.mode == 'Picks for You') {
      this.sessions = pickedSessions;
    }
    if (this.mode == "Free Sessions") {
      this.sessions = freeSessions;
    }
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

}

