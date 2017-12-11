import { Training } from "../models/training";

export class TrainingsService {
	private trainings: Training[] = [];

	addTraining(training: Training) {
		this.trainings.push(training);
		console.log(training);
	}

	getTrainings() {
		return this.trainings.slice();
	}

	removeTraining(index: number) {
		this.trainings.splice(index, 1);
	}
}