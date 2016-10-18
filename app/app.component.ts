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
    ></keg-list>
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
  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }
}
