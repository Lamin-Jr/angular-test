import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./authGuard.service";
import { HomeComponent } from "./home/home.component";
const route: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full" },
    {
      path: "users",
      loadChildren: () => import("./users/user.module").then((m) => m.UserModule),
    },
    {
      path: "servers",
      canActivate: [AuthGuardService],
      loadChildren: () =>
        import("./servers/servers.module").then((m) => m.ServersModule),
    },
  ];

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule],
    // providers: [AuthGuardService]
})
export class AppRoutingModule {}