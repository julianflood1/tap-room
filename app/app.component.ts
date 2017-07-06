import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class= "container">
    <h1>{{currentProject}}</h1>
    <h3> Currently we have these beers: </h3>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <br>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishEditing()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  currentProject: string = 'Tap Room';

  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Traditional Lager', 'Yuengling',5 , 4.5, 124),
    new Keg('Utopias', 'Samuel Adams', 3, 27, 124),
    new Keg('Celebration IPA', 'Sierra Nevada', 4, 6.8, 124)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
