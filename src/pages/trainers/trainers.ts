import { Component } from '@angular/core';

import { FindtrainerPage } from '../trainers/findtrainer/findtrainer';
import { MytrainerPage } from '../trainers/mytrainer/mytrainer';

@Component({
  selector: 'page-trainers',
  templateUrl: 'trainers.html',
})
export class TrainersPage {
	findtrainerPage = FindtrainerPage;
	mytrainerPage = MytrainerPage;

  constructor() {
  	
  }

}
