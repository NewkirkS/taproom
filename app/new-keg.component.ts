import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h2>New Keg</h2>
    <div>
      <label>Name:</label>
      <input #newName>
    </div>
    <div>
    <label>Brand:</label>
    <input #newBrand>
    </div>
    <div>
    <label>Price:</label>
    <input type="number" #newPrice>
    </div>
    <div>
    <label>ABV:</label>
    <input type="number" #newABV>
    <button (click)="
      addKeg(newName.value, newBrand.value, newPrice.value, newABV.value);
      newName.value='';
      newBrand.value='';
      newPrice.value='';
      newABV.value='';
    ">Add Keg</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addKeg(name: string, brand: string, price: number, abv: number) {
    var newKeg: Keg = new Keg(name, brand, price, abv);
    this.newKegSender.emit(newKeg);
  }
}
