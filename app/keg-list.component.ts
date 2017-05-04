import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <ul>
      <li *ngFor="let currentKeg of childKegList">
        {{currentKeg.name}}
        <ul>
          <li>{{"$ " + currentKeg.price}}</li>
          <li>{{currentKeg.brewery}}</li>
          <li>{{currentKeg.type}}</li>
          <li>{{currentKeg.abv + "%"}}</li>
        </ul>
      </li>
    <ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
}
