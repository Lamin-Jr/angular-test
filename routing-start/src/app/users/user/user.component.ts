import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private route: ActivatedRoute) {}

  user: { id: number; name: string };

  subuscribeUser: Subscription;

  ngOnInit() {
    const { id, name } = this.route.snapshot?.params;
    this.user = {
      id: id,
      name: name,
    };
    this.subuscribeUser = this.route.params.subscribe(
      (params: Params) =>
        (this.user = {
          id: params.id,
          name: params.name,
        })
    );
  }

  ngOnDestroy(): void {
      this.subuscribeUser.unsubscribe()
  }

  loadUser() {
    this.router.navigate(["/users/10/lamin"]);
  }
}
