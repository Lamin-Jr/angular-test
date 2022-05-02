import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, protected router: Router) { }

  ngOnInit() {
    const server = this.serversService.getServers()[0];
    this.server = this.serversService.getServer(server.id);
    this.serversService.onServerClick.subscribe(id => this.server = this.serversService.getServer(id) )
  }

  editServer(server){
    this.serversService.onEditServer.emit(server)
    const {id, name, status}: {id: number, name: string, status: string} = server
    this.router.navigate([`/servers/edit/${id}/${name}/${status}`], {queryParams: {parentRoute: "/servers"}})
  }
}
