import { Item } from '../models/item';

export class Session {
	constructor(public subcategory: string,
		public type: string,
		public introduction: string,
		public duration: string,
		public image: string,
		public instructor: string,
		public equipment: string,
		public target: string,
		public calories: string,
		public start_time: string,
		public end_time: string,
        public intensity: string,
        public level: string,
        public tag: string,
        public price: string,
        public student_no: string,
        public items: Item[]){}
}