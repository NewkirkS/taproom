import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }    from  '@angular/forms';
import { KegListComponent } from './keg-list.component';
import { NewKegComponent } from './new-keg.component';
import { EditKegComponent } from
'./edit-keg.component';
import { AlmostEmptyPipe } from './almostEmpty.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    KegListComponent,
    NewKegComponent,
    EditKegComponent,
    AlmostEmptyPipe,

],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
