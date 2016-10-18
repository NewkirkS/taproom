import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Taproom</h1>
    <new-keg
      (newKegSender)="addKeg($event)"
    ></new-keg>
    <keg-list
      [childKegList] ="masterKegList"
      (clickSender)="showDetails($event)"
      (clickSellSender)="sellPint($event)"
    ></keg-list>
    <edit-keg
      [childSelectedKeg]="selectedKeg"
      (doneClickedSender)="finishedEditing()"
    ></edit-keg>
  </div>
  `
})

export class AppComponent {
  public masterKegList:
  Keg[] = [
    new Keg("Lager", "PBR", 4, 3.5),
    new Keg("Stout", "Rogue", 7, 5.9),
    new Keg("IPA", "Ninkasi", 7, 6.9),
  ]
  selectedKeg: Keg = null;
  showDetails(currentKeg) {
    this.selectedKeg = currentKeg;
  }
  finishedEditing() {
    this.selectedKeg = null;
  }
  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }
  sellPint(currentKeg) {
    currentKeg.pints = currentKeg.pints - 1;
  }
}
