import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="childSelectedKeg">
      <label>Edit Keg:</label>
      <input [(ngModel)] = "childSelectedKeg.name">
      <input [(ngModel)] = "childSelectedKeg.brand">
      <input [(ngModel)] = "childSelectedKeg.price">
      <input [(ngModel)] = "childSelectedKeg.alcoholContent">
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
