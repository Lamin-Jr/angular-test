import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShortingPipe } from './shorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ShortingPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
