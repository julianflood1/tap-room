import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class= "container">
    <h1>{{currentProject}}</h1>
    <h3> Currently we have these beers: {{beer1}}/{{beer2}}/{{beer3}}</h3>
    <keg-list></keg-list>
    <br>
    <div *ngIf="selectedKeg">
      <label>Edit Keg:</label>
      <input [(ngModel)] = "selectedKeg.name">
      <input [(ngModel)] = "selectedKeg.brand">
      <input [(ngModel)] = "selectedKeg.price">
      <input [(ngModel)] = "selectedKeg.alcoholContent">
      <button (click)="finishEditing()">Done</button>
    </div>
    <br>

  </div>
  `
})

export class AppComponent {
  currentProject: string = 'Tap Room';
  beer1: string = 'Traditional Lager';
  beer2: string = 'Utopias';
  beer3: string = 'Celebration IPA';

  selectedKeg = null;


  finishEditing() {
    this.selectedKeg = null;
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }


}
