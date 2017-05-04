import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `

    <button (click)="addingKeg = !addingKeg">Add New Keg</button>
    <div *ngIf="addingKeg" class="well">
      <div>
        <label>Beer name</label>
        <input #newName class="form-control">
        <label>Beer brewery</label>
        <input #newBrewery class="form-control">
        <label>Beer type</label>
        <input #newType class="form-control">
        <label>Pint Price</label>
        <input #newPintPrice class="form-control">
        <label>ABV</label>
        <input #newAbv class="form-control">
        <button (click)="submitForm(newName.value, newBrewery.value, newType.value, newPintPrice.value, newAbv.value); newName.value=''; newBrewery.value=''; newType.value=''; newPintPrice.value=''; newAbv.value=''">Add Keg</button>
      </div>
    </div>

  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  addingKeg: boolean = false;

  submitForm(name: string, brewery: string, type: string, price: number, abv: number) {
    var newKeg: Keg = new Keg(name, brewery, type, price, abv);
    this.newKegSender.emit(newKeg);
  }

}
