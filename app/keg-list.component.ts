import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <ol>
    <li [class]="fullnessColor(currentKeg)"(click)="isEmpty(currentKeg)" *ngFor="let currentKeg of kegs">{{currentKeg.name}}, {{currentKeg.brand}}, {{currentKeg.price}}, {{currentKeg.alcoholContent}} <button (click)="sellBeer()">Pour a Beer!</button><button (click)="editKeg(currentKeg)">Edit Keg!</button></li>
  </ol>
  `
})
 export class KegListComponent {
   kegs: Keg[] = [
     new Keg('Traditional Lager', 'Yuengling', '$5.00', '4.5%', 3),
     new Keg('Utopias', 'Samuel Adams', '$5.00', '27.0%', 2),
     new Keg('Celebration IPA', 'Sierra Nevada', '$5.00', '6.8%', 2)
   ];

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
