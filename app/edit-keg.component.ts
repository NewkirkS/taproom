import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf='childSelectedKeg'>
    <h3>Edit Keg</h3>
    <div>
      <label>Edit name</label>
      <input class="form-control"
      [(ngModel)]="childSelectedKeg.name">
    </div>
    <div>
      <label>Edit brand</label>
      <input class="form-control"
      [(ngModel)]="childSelectedKeg.brand">
    </div>
    <div>
      <label>Edit price</label>
      <input class="form-control" type="number"
      [(ngModel)]="childSelectedKeg.price">
    </div>
    <div>
      <label>Edit ABV</label>
      <input class="form-control" type="number"
      [(ngModel)]="childSelectedKeg.abv">
      <button class="btn btn-danger"
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
