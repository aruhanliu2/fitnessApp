import { Component } from '@angular/core';
import { TrainingPage } from '../training/training';
import { FeaturedPage } from '../featured/featured';
import { TrainersPage } from '../trainers/trainers';
import { ProfilePage } from '../profile/profile';



@Component({
	selector: 'page-tabs',
	template: `
		<ion-tabs selectedIndex="0">
			<ion-tab [root]="trainingPage" tabTitle="My Training" tabIcon="body"></ion-tab>
			<ion-tab [root]="featuredPage" tabTitle="Featured" tabIcon="star"></ion-tab>
			<ion-tab [root]="trainersPage" tabTitle="Trainers" tabIcon="search"></ion-tab>
			<ion-tab [root]="profilePage" tabTitle="Profile" tabIcon="contact"></ion-tab>
		</ion-tabs>
	`
})

export class TabsPage {
	trainingPage = TrainingPage;
	featuredPage = FeaturedPage;
	trainersPage = TrainersPage;
	profilePage = ProfilePage;
}
