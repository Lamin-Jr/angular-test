import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, Router, RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users.component";

const route: Routes = [{path: "", component: UsersComponent, children: [{path:':id/:name', component: UserComponent }] }]
@NgModule({
    imports: [CommonModule, RouterModule.forChild(route)],
    exports: [RouterModule, UsersComponent, UserComponent ],
    declarations: [UsersComponent, UsersComponent, UserComponent]
})
export class UserModule {}