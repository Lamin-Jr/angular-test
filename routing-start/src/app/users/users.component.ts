import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IUsersModel } from "./users.interface";
import { UsersService } from "./users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
  providers: [UsersService],
})
export class UsersComponent implements OnInit {
  users: IUsersModel[];

  ngOnInit() {
    this.users = this.usersService.users;
  }

  constructor(private router: Router, protected usersService: UsersService) {}

  onNavigateToUser(nav:IUsersModel) {
    this.router.navigate([`/users/${nav.id}/${nav.name}`]);
  }
  onNavigate() {
    this.router.navigate(["servers"]);
  }
  onNavigateAnotherUser() {
    this.router.navigate(["/users/1/max"]);
  }
}
