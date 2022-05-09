import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ServersService } from "./servers.service";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onClickServer(id: number) {
    this.serversService.onServerClick.emit(id);
  }
  
  onShowUser(id: number) {
    const { status } = this.serversService.getServer(id);
    this.router.navigate([id], {
      relativeTo: this.activateRoute,
      queryParams: { status: status, parentRoute: this.router.url },
      queryParamsHandling: "merge",
    });
  }
}
