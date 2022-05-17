import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IServers } from '../server.interface';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: IServers;

  constructor(protected serverService: ServersService, protected route: Router, protected activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
   const entityId = this.activeRoute.snapshot.params.id 
    this.server = this.serverService.getServers()[ +entityId]

  
    
  }

  viewServer(){
    this.route.navigate(["servers"])
  }

}
