import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template:`
  <div class="jumbotron">
    <h1>Tap Room</h1>
  </div>
  <new-keg (newKegSender)="addKeg($event)"></new-keg>
  <div class="row">
    <keg-list [childKegList]="kegList"></keg-list>
  </div>
  `
})

export class AppComponent {

  kegList: Keg[] = [
    new Keg("Wookie Jack", "Firestone", "IPA", 5, 8),
    new Keg("Vortex", "Ft. George", "IPA", 5, 7),
    new Keg("Radler", "Stiegl", "Shandy", 6, 4)
  ];

  addKeg(newKeg: Keg) {
    this.kegList.push(newKeg)
  }

}
