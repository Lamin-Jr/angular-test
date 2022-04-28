import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicDirective } from './basic-directive/basic.directive';
import { BetterDirectiveDirective } from './better-directive/better-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirective,
    BetterDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
