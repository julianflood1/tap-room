import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class= "container">
    <h1>{{currentProject}}</h1>
    <h3> Currently we have these beers: {{beer1}}/{{beer2}}/{{beer3}}</h3>
    <ol>
      <li [class]="fullnessColor(currentKeg)"(click)="isEmpty(currentKeg)" *ngFor="let currentKeg of kegs">{{currentKeg.name}}, {{currentKeg.brand}}, {{currentKeg.price}}, {{currentKeg.alcoholContent}} <button (click)="sellBeer()">Pour a Beer!</button><button (click)="editKeg(currentKeg)">Edit Keg!</button></li>
    </ol>
    <br>
    <div>
      <label>Edit Keg:</label>
      <input [(ngModel)] = "selectedKeg.name">
      <input [(ngModel)] = "selectedKeg.brand">
      <input [(ngModel)] = "selectedKeg.price">
      <input [(ngModel)] = "selectedKeg.alcoholContent">
    </div>
    <br>
    <div>
      <label>Add a New Keg:</label>
      <input #name placeholder = "name">
      <input #brand placeholder = "brand">
      <input #price placeholder = "price">
      <input #alcoholContent placeholder = "Alcohol Content">
       <button (click)="addKeg(name.value, brand.value, price.value, alcoholContent.value)">Add Contact</button>
    </div>


  </div>
  `
})

export class AppComponent {
  currentProject: string = 'Tap Room';
  beer1: string = 'Traditional Lager';
  beer2: string = 'Utopias';
  beer3: string = 'Celebration IPA';
  kegs: Keg[] = [
    new Keg('Traditional Lager', 'Yuengling', '$5.00', '4.5%', 3),
    new Keg('Utopias', 'Samuel Adams', '$5.00', '27.0%', 2),
    new Keg('Celebration IPA', 'Sierra Nevada', '$5.00', '6.8%', 2)
  ];
  selectedKeg: Keg = this.kegs[0];


  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
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

export class Keg {
  public done: boolean = true;
  constructor(public name: string, public brand: string, public price: string, public alcoholContent: string, public fullness: number){ }
}
