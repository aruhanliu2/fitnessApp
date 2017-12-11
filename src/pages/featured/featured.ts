import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";
import { Session } from '../../models/session';
import sessionsByType from '../../data/sessionsByType';
import sessionsByGoal from '../../data/sessionsByGoal';
import freeSessions from '../../data/free-sessions';
import { SessionPage } from '../../pages/session/session';
import premiums from '../../data/premiums';
import { GeneralfilterPage } from '../../pages/generalfilter/generalfilter';
import { FilterPage } from "../../pages/filter/filter";
import { Data } from '../../providers/data/data';
import pickedSessions from "../../data/picked-sessions";

@Component({
  selector: 'page-featured',
  templateUrl: 'featured.html',
})

export class FeaturedPage implements OnInit {

  sessionByGoalCollection: {goal: string, image: string, sessions: Session[]}[];
  sessionByTypeCollection: {category: string, image: string, sessions: Session[]}[];
  freeSessions;
  pickedSessions;
	premiums;
	sessionPage = SessionPage;
  generalfilterPage = GeneralfilterPage;

   searchTerm: string = '';
    items: any;

  constructor(private navCtrl: NavController, public dataService: Data) {
  }

  ionViewDidLoad() {
 
        this.setFilteredItems();
 
    }

   setFilteredItems() {
 
        this.items = this.dataService.filterItems(this.searchTerm);
 
    }

  	ngOnInit() {
  		this.sessionByTypeCollection = sessionsByType;
      this.sessionByGoalCollection = sessionsByGoal;
  		this.premiums = premiums;
      this.freeSessions = freeSessions;
      this.pickedSessions = pickedSessions;
  	}

    onGoToFilter1(name: string) {
        this.navCtrl.push(this.generalfilterPage, {mode: 'Picks for You'});
    }

    onGoToFilter2(name: string) {
        this.navCtrl.push(this.generalfilterPage, {mode: 'Free Sessions'});
    }

}