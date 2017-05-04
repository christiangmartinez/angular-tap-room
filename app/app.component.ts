import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template:`
  <div class="jumbotron">
    <h1>Tap Room</h1>
  </div>
  <new-keg (newKegSender)="addKeg($event)"></new-keg>
  <keg-list [childKegList]="kegList"></keg-list>
  `
})

export class AppComponent {

  kegList: Keg[] = [];

  addKeg(newKeg: Keg) {
    this.kegList.push(newKeg)
  }

}
