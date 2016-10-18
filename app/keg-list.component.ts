import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component ({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="underTen">Show Kegs w/ under 10 Pints</option>
    <option value="showAll" selected="selected">Show All Kegs</option>
  </select>
  <div class="rightCol" *ngFor="let currentKeg of childKegList | almostEmpty:selectedLevel">
  <h3 [ngClass]="{lessThanFive: currentKeg.price <= 5, greaterThanFive: currentKeg.price > 5 }">{{currentKeg.name}}</h3>
  <ol>
  <li> Brand - {{currentKeg.brand}}</li>
  <li [ngClass]="{lessThanFive: currentKeg.price <= 5, greaterThanFive: currentKeg.price > 5 }"> $ {{currentKeg.price}} per pint</li>
  <li>{{currentKeg.abv}} % ABV</li>
  <li>{{currentKeg.pints}} pints left in keg</li>
  </ol>
  <button class="btn btn-danger" (click)="editButtonHasBeenClicked(currentKeg)"
  >Edit Keg</button>
  <button class="btn btn-info" (click)="sellPintButtonHasBeenClicked(currentKeg)"
  >Sell a Pint</button>
  </div>
  `
})

export class KegListComponent {
  public selectedLevel: string = "showAll";
  @Input() childKegList: Keg[];
  @Output() clickSender =
  new EventEmitter();
  @Output() clickSellSender =
  new EventEmitter();
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  sellPintButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSellSender.emit(kegToEdit);
  }
  onChange(optionFromMenu) {
    this.selectedLevel = optionFromMenu;
    console.log(this.selectedLevel);
  }
}
