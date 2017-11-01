import { Component, OnInit } from '@angular/core';
import { Trainer } from "../../../models/trainer";
import trainers from "../../../data/trainers";
import { TrainerPage } from "../../trainer/trainer";

@Component({
  selector: 'page-findtrainer',
  templateUrl: 'findtrainer.html',
})
export class FindtrainerPage implements OnInit {
	trainerCollection: {category: string, trainers: Trainer[]}[];
	trainerPage = TrainerPage;
	items;

	ngOnInit() {
		this.trainerCollection = trainers;
	}

	initializeItems() {
		this.items = this.trainerCollection;
	}

	getTrainers(ev: any) {
		//initialize items
		this.initializeItems();

	    // set val to the value of the searchbar
	    let val = ev.target.value;

	    // if the value is an empty string don't filter the items
	    if (val && val.trim() != '') {
	      this.items = this.items.filter((trainerGroup) => {
	        return (trainerGroup.category.toLowerCase().indexOf(val.toLowerCase()) > -1);
	      });
	    }
  	}

}
