import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Route, Router } from "@angular/router";
import { IServersModel } from "../servers.interface";

import { ServersService } from "../servers.service";

interface RouteParams extends Params {
  id: number;
  name: string;
  status: string;
}

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  parentRoute: string;

  serverName = "";
  serverStatus = "";
  protected serverId: number;
  isLoading: boolean = false;

  constructor(
    private serversService: ServersService,
    protected router: Router,
    protected activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const snapshot = this.activeRoute.snapshot;
    const { loading } = this.activeRoute.snapshot.params;

    this.isLoading = loading;

    console.log("is Loading?", this.isLoading);

    this.parentRoute = queryParams?.parentRoute;
    console.log(this.parentRoute);

    this.server = {
      name: queryParams?.name,
      id: queryParams.id,
      status: queryParams.status,
    };

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.serversService.onEditServer.subscribe(
      (server: IServersModel) => (this.server = server)
    );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.router.navigate([this.parentRoute, this.server.id]);
  }
}
