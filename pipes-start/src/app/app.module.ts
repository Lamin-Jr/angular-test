import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShortingPipe } from './shorting.pipe';
import { ServersService } from './servers/servers.service';
import { AppRoute } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoute,
  ],
  providers: [ServersService, ShortingPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
