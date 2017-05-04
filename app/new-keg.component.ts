import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <div class="well">
      <form>
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
        <button (click)="submitForm(newName.value, newBrewery.value, newPintPrice.value, newAbv.value);">Add Keg</button>
      </form>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brewery: string, type: string, price: number, abv: number) {
    var newKeg: Keg = new Keg(name, brewery, type, price, abv);
    this.newKegSender.emit(newKeg);
  }
}
