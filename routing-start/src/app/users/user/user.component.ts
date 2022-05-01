import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  constructor(private router: Router,  private route: ActivatedRoute) { }
  
  user: {id: number, name: string};

  ngOnInit() {

    const {id, name}= this.route.snapshot?.params;
    this.user = {
      id: id,
      name: name
    }
    this.route.params.subscribe((params: Params)=> this.user = {
      id: params.id,
      name: params.name
    })
  }

  loadUser() {
    this.router.navigate(["/users/10/lamin"])
  }

}
