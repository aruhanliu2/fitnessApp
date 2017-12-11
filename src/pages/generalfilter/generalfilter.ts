import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import freeSessions from '../../data/free-sessions';
import pickedSessions from '../../data/picked-sessions';
import { FilterPage } from '../../pages/filter/filter';
import { SortPage } from '../../pages/sort/sort';
import { SessionPage } from '../../pages/session/session';

@Component({
  selector: 'page-generalfilter',
  templateUrl: 'generalfilter.html',
})
export class GeneralfilterPage implements OnInit{
	mode = '';
	sessions;
  loadedSessions;

  filterPage = FilterPage;
  sortPage = SortPage;
  type;
  sessionPage = SessionPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ngOnInit() {
  	this.mode = this.navParams.get('mode');
  	if (this.mode == 'Picks for You') {
  		this.loadedSessions = pickedSessions;
      this.sessions = this.loadedSessions;
  	}
  	if (this.mode == "Free Sessions") {
  		this.loadedSessions = freeSessions;
      this.sessions = this.loadedSessions;
  	}
  }

  initializeItems(): void {
    this.sessions = this.loadedSessions;
  }

  onInput(searchbar) {
    this.initializeItems();
    let q = searchbar.srcElement.value || searchbar.target.value;
    if (!q) {
      return;
    }
    if (q && q.trim() != '') {
      this.sessions = this.sessions.filter((session) => {
        return (session.subcategory.toLowerCase().indexOf(q.toLowerCase()) > -1)
        || (session.start_time.toLowerCase().indexOf(q.toLowerCase()) > -1)
        || (session.end_time.toLowerCase().indexOf(q.toLowerCase()) > -1)
        || (session.instructor.toLowerCase().indexOf(q.toLowerCase()) > -1);
      })
    }
    /*this.sessions = this.sessions.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });*/

    console.log(q, this.sessions.length);
  }


  onCancel() {

  }

    onGoBack() {
  	this.navCtrl.pop();
  }

  onGoToFilter() {
    this.navCtrl.push(this.filterPage, {mode: this.mode});
  }

  onGoToSort() {
    this.navCtrl.push(this.sortPage, {mode: this.mode});
  }


}
