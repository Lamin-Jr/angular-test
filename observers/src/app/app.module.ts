import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { DriverComponent } from './driver/driver.component';
import { DriverModule } from './driver/driver.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DriverModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
