import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {  RouterModule, Routes } from "@angular/router";
import { EditServerComponent } from "./edit-server/edit-server.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers.component";

const route: Routes = [
  {
    path: "",
    component: ServersComponent,
    children: [
      { path: ":id", component: ServerComponent },
      { path: ":id/edit", component: EditServerComponent },
    ],
  },
];

@NgModule({
  imports: [FormsModule,CommonModule, RouterModule.forChild(route)],
  declarations: [ServersComponent, EditServerComponent, ServerComponent],
  exports: [EditServerComponent, ServerComponent, RouterModule],
})
export class ServersModule {}
