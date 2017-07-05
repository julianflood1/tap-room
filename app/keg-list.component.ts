import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <ol>
    <li (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of childKegList">{{currentKeg.name}}, {{currentKeg.brand}}, {{currentKeg.price}}, {{currentKeg.alcoholContent}} <button (click)="sellBeer()">Pour a Beer!</button><button (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg!</button></li>
  </ol>
  `
})
 export class KegListComponent {
   @Input() childKegList: Keg[];
   @Output() clickSender = new EventEmitter();

   editButtonHasBeenClicked(kegToEdit: Keg) {
   this.clickSender.emit(kegToEdit);
 }

   isEmpty(clickedKeg: Keg) {
     if(clickedKeg.done === true) {
       alert('This Keg is empty!');
     } else {
       alert('Drink Up!');
     }
   }

   fullnessColor(currentKeg) {
     if(currentKeg.fullness === 3) {
       return "bg-danger";
     } else if (currentKeg.fullness === 2) {
       return "bg-warning";
     } else {
       return "bg-info"
     }
   }
 }
