import { Component, OnInit } from '@angular/core';
import { Session } from '../../models/session';
import sessions from '../../data/sessions';
import { SessionPage } from '../../pages/session/session';
import premiums from '../../data/premiums';

@Component({
  selector: 'page-featured',
  templateUrl: 'featured.html',
})
export class FeaturedPage implements OnInit {
	sessionCollection: {category: string, sessions: Session[]}[];
	premiums: {subcategory: string,
        time: string,
        duration: string,
        image: string,
        instructor: string,
        equipment: string,
        target: string,
    	  students_no: string}[];

	  sessionPage = SessionPage;

  	ngOnInit() {
  		this.sessionCollection = sessions;
  		this.premiums = premiums;
  	}

}
