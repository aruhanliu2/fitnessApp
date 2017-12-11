import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { SessionService } from '../../services/session';
import { SessionTest } from '../../models/sessionTest';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
	listItems: SessionTest[];
	constructor(private sessionService: SessionService){}

	ionViewWillEnter() {
		this.loadItems();
	}

  onCreateSession(form: NgForm) {
  	this.sessionService.addSession(form.value.subcategory);
  	form.reset();
  }

  private loadItems() {
  	this.listItems = this.sessionService.getSessions();
  }

}
