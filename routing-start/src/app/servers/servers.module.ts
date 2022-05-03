import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { EditServerComponent } from "./edit-server/edit-server.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers.component";

const route: Routes = [
  {
    path: "",
    component: ServersComponent,
    children: [
      { path: ":id", component: ServerComponent },
      { path: "/edit/:id/:name/:status", component: EditServerComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(route)],
  declarations: [EditServerComponent, ServerComponent],
  exports: [EditServerComponent, ServerComponent],
})
export class ServersModule {}
