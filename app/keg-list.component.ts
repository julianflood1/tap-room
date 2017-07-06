import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <ol>
    <li [class]="priceColor(currentKeg)" *ngFor="let currentKeg of childKegList"><label>keg name: </label>{{currentKeg.name}}<br> <label>Brand name: </label>{{currentKeg.brand}}<br> <label>Pint Price: </label>{{currentKeg.price}}<br> <label>ABV: </label>{{currentKeg.alcoholContent}}<br> <label>Pints left: </label>{{currentKeg.fullness}}<br><button (click)="sellBeer(currentKeg)">Pour a Beer!</button> <button (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg!</button></li>
  </ol>
  `
})
 export class KegListComponent {
   @Input() childKegList: Keg[];
   @Output() clickSender = new EventEmitter();

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
