import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h3>New Keg</h3>
    <div>
      <label>Name:</label>
      <input class="form-control" #newName>
    </div>
    <div>
    <label>Brand:</label>
    <input class="form-control" #newBrand>
    </div>
    <div>
    <label>Price:</label>
    <input class="form-control" type="number" #newPrice>
    </div>
    <div>
    <label>ABV:</label>
    <input class="form-control" type="number" #newABV>
    <br>
    <button class="btn btn-danger" (click)="
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
