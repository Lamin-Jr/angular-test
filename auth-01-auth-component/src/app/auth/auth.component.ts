import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from "../shared/user.interface";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent {
  swithLogIn: boolean = false;
  isRegistered: boolean = false;
  errorMessage: string = null;
  isLoading: boolean = false;

  constructor(protected authService: AuthService, protected route: Router) {}

  onSignUp(user: IUser) {
    console.log("Is SignUp Baby authData", this.authService.user);

    this.isLoading = true;

    this.authService.onSignUp(user).subscribe(
      (signUpRes) => {
        setTimeout(() => {
          this.route.navigate(["/recipes"]);
          this.isLoading = false;
        }, 2000);
      },
      (error) => {
        setTimeout(() => {
          this.isLoading = false;
          this.errorMessage = error;
        }, 2000);
      }
    );
  }

  onLogIn(user: IUser) {
    this.isLoading = true;
    this.authService.onLogIn(user).subscribe(
      (logInRes) => {
        setTimeout(() => {
          this.isLoading = false;
          this.route.navigate(["/recipes"]);
        });
      },
      (error) => {
        setTimeout(() => {
          this.isLoading = false;
          this.errorMessage = error;
          setTimeout(() => {
            this.errorMessage = null;
          }, 1500);
        }, 2000);
      }
    );
  }

  switchLogInButton() {
    this.swithLogIn = !this.swithLogIn;
  }

  // handleAuthentication(){
    
  // } 
}
