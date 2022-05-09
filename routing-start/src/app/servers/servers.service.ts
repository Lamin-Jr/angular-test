import { EventEmitter, Injectable, Output } from "@angular/core";
import { IServersModel } from "./servers.interface";

@Injectable()
export class ServersService {
  private servers = [
    {
      id: 1,
      name: "Productionserver",
      status: "online",
    },
    {
      id: 2,
      name: "Testserver",
      status: "offline",
    },
    {
      id: 3,
      name: "Devserver",
      status: "offline",
    },
  ];

  @Output() onServerClick = new EventEmitter<number>();
  @Output() onEditServer = new EventEmitter <IServersModel>()

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find((s) => {
      return s.id === id;
    });
    return server;
  }

  updateServer(id: number, serverInfo: { name: string; status: string }) {
    const server = this.servers.find((s) => {
      return s.id === id;
    });
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
