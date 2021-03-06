import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { NewKegComponent } from './new-keg.component';
import { KegListComponent } from './keg-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, NewKegComponent, KegListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
