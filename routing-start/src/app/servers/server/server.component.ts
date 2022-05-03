import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { IServersModel } from "../servers.interface";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  entityId: number;

  constructor(
    private serversService: ServersService,
    protected router: Router,
    protected activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.entityId = +this.activeRoute.snapshot.params["id"];

    this.server = this.serversService.getServer(this.entityId);

    this.activeRoute.params.subscribe((params: Params) => {
      this.entityId = +params.id;
      this.server = this.serversService.getServer(this.entityId);
    });
  }

  editServer(server: IServersModel) {
    this.serversService.onEditServer.emit(server);
    const { id, name, status } = server;
    this.router.navigate([`edit`,id,name,status], {
      queryParams: { parentRoute: "/servers" },
      relativeTo: this.activeRoute
    });
  }

  getServerApi;
}
