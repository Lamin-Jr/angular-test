import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { exhaustMap, take } from "rxjs/operators";
import { AuthService } from "src/app/auth/auth.service";
import { DataStorageService } from "src/app/shared/data-storage.service";

@Component({
  selector: "app-recipe-start",
  templateUrl: "./recipe-start.component.html",
  styleUrls: ["./recipe-start.component.css"],
})
export class RecipeStartComponent implements OnInit {
  constructor(
    protected dataStorage: DataStorageService,
    protected authService: AuthService,
    protected route: Router
  ) {}
  isSignIn: boolean = false;

  ngOnInit() {
    // this.authService.user.pipe(
    //   take(1),
    //   exhaustMap((userSubject) => {
    //     this.isSignIn = Boolean(userSubject.idToken);

    //     if (!this.isSignIn) {
    //       this.route.navigate(["/auth"]);
    //     } else {
    //       this.dataStorage.fetchRecipes().subscribe();
    //     }
    //     return userSubject.idToken;
    //   })
    // );
  }
}
