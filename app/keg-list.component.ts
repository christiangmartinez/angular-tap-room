import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div *ngFor="let currentKeg of childKegList" class="col-md-4 well">
      {{currentKeg.name}}
      <ul>
        <li>{{"$ " + currentKeg.price}}</li>
        <li>{{currentKeg.brewery}}</li>
        <li>{{currentKeg.type}}</li>
        <li>{{currentKeg.abv + "%"}}</li>
      </ul>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
}
