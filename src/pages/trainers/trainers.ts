import { Component, OnInit } from '@angular/core';
import { AvailabletrainerPage } from '../../pages/availabletrainer/availabletrainer';
import { ScheduletrainerPage } from '../../pages/scheduletrainer/scheduletrainer';
import trainers from '../../data/trainers';
import myTrainers from '../../data/my-trainers';
import pickedSessions from '../../data/picked-sessions';
import { TrainerPage } from '../../pages/trainer/trainer';

@Component({
  selector: 'page-trainers',
  templateUrl: 'trainers.html',
})
export class TrainersPage implements OnInit {
	availabletrainerPage = AvailabletrainerPage;
	scheduletrainerPage = ScheduletrainerPage;
	trainers;
	myTrainers;
	trainerPage = TrainerPage;
  constructor() {}

  ngOnInit() {
  	this.trainers = trainers;
  	this.myTrainers = myTrainers;
  }

}
