import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component ({
  selector: 'keg-list',
  template: `
  <div *ngFor="let currentKeg of childKegList">
  <h3>{{currentKeg.name}}</h3>
  <ol>
  <li> Brand - {{currentKeg.brand}}</li>
  <li> $ {{currentKeg.price}} per pint</li>
  <li>{{currentKeg.abv}} % ABV</li>
  <li>{{currentKeg.pints}} pints left in keg</li>
  </ol>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
}
