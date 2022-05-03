import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from "@angular/core";
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

  constructor(
    private serversService: ServersService,
    protected router: Router,
    protected activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log("My Params Snap",this.activeRoute.snapshot)
    this.parentRoute = this.activeRoute.snapshot.queryParams.parentRoute

    this.server = {
      name: params?.name,
      id: params.id,
      status: params.status
    };

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    console.log(this.serverName);

    this.serversService.onEditServer.subscribe(
      (server: IServersModel) => (this.server = server)
    );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.router.navigate([this.parentRoute])
  }
}
