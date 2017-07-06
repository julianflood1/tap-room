import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Enter Name of Beer:</label>
      <input #newName>
      <label>Enter Keg Brand Name:</label>
      <input #newBrand>
      <label>Enter Beer Price:</label>
      <input #newPrice>
      <label>Enter Keg Alcohol Content:</label>
      <input #newAlcoholContent>
      <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value='';">Add</button>
    </div>

  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number, fullness: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent, 124);
    this.newKegSender.emit(newKegToAdd);
  }
}
