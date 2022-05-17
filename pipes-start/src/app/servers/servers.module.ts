import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ShortingPipe } from "../shorting.pipe";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers.component";

const route: Routes = [
  {
    path: "",
    component: ServersComponent,
  },    
  {
    path: ":id",
    component: ServerComponent,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(route)],
  exports: [RouterModule],
  declarations: [ServersComponent, ServerComponent, ShortingPipe],
  providers: [ShortingPipe],
})
export class ServersModule {}
