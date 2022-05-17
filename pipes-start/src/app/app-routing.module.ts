import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";


const route: Routes = [
  {
    path: "servers",
    loadChildren: ()=> import("./servers/servers.module").then(server => server.ServersModule),
  }
];

@NgModule({
  imports: [CommonModule ,BrowserModule, FormsModule, RouterModule.forRoot(route)],
  exports: [RouterModule],
})
export class AppRoute {}
