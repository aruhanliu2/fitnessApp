import { Training } from "../models/training";

export class TrainingsService {
	private trainings: Training[] = [];

	addTraining(subcategory: string,
		date: string,
		time: string,
		duration: string) {
		this.trainings.push(new Training(subcategory, date, time, duration));
	}

	getTrainings() {
		return this.trainings.slice();
	}

	removeTraining(index: number) {
		this.trainings.splice(index, 1);
	}
}