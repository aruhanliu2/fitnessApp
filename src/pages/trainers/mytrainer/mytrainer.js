var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import trainers from "../../../data/trainers";
import { TrainerPage } from "../../trainer/trainer";
var MytrainerPage = /** @class */ (function () {
    function MytrainerPage() {
        this.trainerPage = TrainerPage;
    }
    MytrainerPage.prototype.ngOnInit = function () {
        this.trainerCollection = trainers;
    };
    MytrainerPage.prototype.initializeItems = function () {
        this.items = this.trainerCollection;
    };
    MytrainerPage.prototype.getTrainers = function (ev) {
        //initialize items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (trainerGroup) {
                return (trainerGroup.category.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    MytrainerPage = __decorate([
        Component({
            selector: 'page-mytrainer',
            templateUrl: 'mytrainer.html',
        })
    ], MytrainerPage);
    return MytrainerPage;
}());
export { MytrainerPage };
//# sourceMappingURL=mytrainer.js.map