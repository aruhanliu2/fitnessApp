import { Component } from '@angular/core';
import { TrainingPage } from '../training/training';
import { FeaturedPage } from '../featured/featured';
import { TrainersPage } from '../trainers/trainers';
import { ProfilePage } from '../profile/profile';

@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html',
})

export class TabsPage {
	trainingPage = TrainingPage;
	featuredPage = FeaturedPage;
	trainersPage = TrainersPage;
	profilePage = ProfilePage;
}
