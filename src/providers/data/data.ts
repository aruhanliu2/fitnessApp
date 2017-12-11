import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import items from "../../data/free-sessions";

@Injectable()
export class Data {
	items: any;

  constructor(public http: Http) {
            this.items = items;
  }

      filterItems(searchTerm){
 
        return this.items.filter((item) => {
            return item.subcategory.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    
 
    }

}
