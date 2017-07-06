import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `

  <select (change)="onChange($event.target.value)">
    <option value="allKegs" selected="selected">All Kegs</option>
    <option value="overFive">Over 5% ABV</option>
    <option value="underFive">Under 5% ABV</option>
  </select>

  <ol>
    <li [class]="priceColor(currentKeg)" *ngFor="let currentKeg of childKegList | abv:filterByAbv"><label>keg name: </label>{{currentKeg.name}}<br> <label>Brand name: </label>{{currentKeg.brand}}<br> <label>Pint Price: </label>{{currentKeg.price}}<br> <label>ABV: </label>{{currentKeg.alcoholContent}}<br> <label>Pints left: </label>{{currentKeg.fullness}}<br><button (click)="sellBeer(currentKeg)">Pour a Beer!</button> <button (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg!</button></li>
  </ol>
  `
})
 export class KegListComponent {
   @Input() childKegList: Keg[];
   @Output() clickSender = new EventEmitter();
   filterByAbv: string = "allKegs";

   onChange(optionFromMenu) {
  this.filterByAbv = optionFromMenu;
  }

   editButtonHasBeenClicked(kegToEdit: Keg) {
   this.clickSender.emit(kegToEdit);
 }

   sellBeer(currentKeg){
    currentKeg.fullness -= 1;
    if(currentKeg.fullness <= 10) {
      alert('This beer is running low! Replace Keg soon!');
    }
  }

  priceColor(currentKeg){
    if (currentKeg.price <= 4){
      return "bg-info";
    } else {
      return "bg-danger";
    }
  }
}
