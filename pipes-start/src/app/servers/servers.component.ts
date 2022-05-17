import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { interval, Subscription } from "rxjs";
import { IServers } from "./server.interface";
import { ServersService } from "./servers.service";

@Component({
  selector: "servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
  providers: [ServersService]
})
export class ServersComponent implements OnInit, OnDestroy {
  servers: IServers[] = [];
  newItem: string;
  protected observableControl: Subscription;

  viewTimer: number = 0;

  

  constructor(
    protected serverService: ServersService,
    protected route: Router,
    protected activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serverService.getServers();
    console.log(this.serverService.getServers())


    //Testing some observable 
    this.observableControl= interval(800).subscribe(data=> console.log(data))
    

  }

  ngOnDestroy(): void {
    //Unsubscribing to Observers subscription
      this.observableControl.unsubscribe();
  }

  onSingleItemClick(i) {
    this.route.navigate([i], {relativeTo: this.activeRoute})
  }

  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      "list-group-item-success": server.status === "stable",
      "list-group-item-warning": server.status === "offline",
      "list-group-item-danger": server.status === "critical",
    };
  }
}
