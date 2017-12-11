import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SortPage } from '../../pages/sort/sort';
import { TrainerfilterPage } from '../../pages/trainerfilter/trainerfilter';
import trainers from '../../data/trainers';
import { TrainerPage } from '../../pages/trainer/trainer';

@Component({
  selector: 'page-availabletrainer',
  templateUrl: 'availabletrainer.html',
})
export class AvailabletrainerPage implements OnInit{
	sortPage = SortPage;
	trainerfilterPage = TrainerfilterPage;
  trainers;
  trainerPage = TrainerPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.trainers = trainers;
  }

  onGoBack() {
    this.navCtrl.pop();
  }

  onGoToSort() {
  	this.navCtrl.push(this.sortPage);
  }

  onGoToFilter() {
  	this.navCtrl.push(this.trainerfilterPage);
  }

}
