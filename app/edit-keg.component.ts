import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf='childSelectedKeg'>
    <h1>Edit Keg</h1>
    <div>
      <label>Edit name</label>
      <input
      [(ngModel)]="childSelectedKeg.name">
    </div>
    <div>
      <label>Edit brand</label>
      <input
      [(ngModel)]="childSelectedKeg.brand">
    </div>
    <div>
      <label>Edit price</label>
      <input type="number"
      [(ngModel)]="childSelectedKeg.price">
    </div>
    <div>
      <label>Edit ABV</label>
      <input type="number"
      [(ngModel)]="childSelectedKeg.abv">
      <button
      (click)="doneClicked()">Done</button>
    </div>
  </div>

  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
