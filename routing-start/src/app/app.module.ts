import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ServersComponent } from "./servers/servers.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeaderComponent } from "./header/header.component";
import { ServersModule } from "./servers/servers.module";
import { CommonModule } from "@angular/common";

const route: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  {
    path: "users",
    loadChildren: () => import("./users/user.module").then((m) => m.UserModule),
  },
  {
    path: "servers",
    loadChildren: () =>
      import("./servers/servers.module").then((m) => m.ServersModule),
  },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "page-not-found" },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(route), CommonModule],
  providers: [ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
