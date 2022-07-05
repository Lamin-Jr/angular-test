import { Component, OnInit } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  // isAuthenticated: boolean = false
  constructor(
    private dataStorageService: DataStorageService,
    protected authService: AuthService
  ) {}

  ngOnInit() {
    // this.authService.user.pipe(take(1), tap(userAuth => {
    //   if(userAuth.idToken && userAuth.email){
    //     this.isAuthenticated = true
    //   }else{
    //     this.isAuthenticated = false
    //   }
    // }))
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogOut() {
    this.authService.onLogOut();
  }

  get isAuthenticated() {
    let userToken: string = null;
    this.authService.user.pipe(
      take(1),
      tap((user) =>{
        console.log("Testing headers usr availability", user)
        userToken = user.idToken
        return user.idToken
      })
    );
    console.log("Testing headers",userToken);

    return userToken;
  }
}
