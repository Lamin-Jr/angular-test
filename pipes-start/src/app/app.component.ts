import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IServers } from "./servers/server.interface";
import { ServersService } from "./servers/servers.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(protected serverService: ServersService, protected route: Router) {}
  servers: IServers[] = [];
  ngOnInit(){
    this.servers = this.serverService.getServers()
  }

  newItem = "";
  viewServer(){
    this.route.navigate(["servers"])
  }

  addNewItem() {
    this.servers.push({
      instanceType: "small",
      name: this.newItem,
      status: "stable",
      started: new Date(15, 1, 2017),
    });
  }
  
}
