import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LogInService } from "../shared/login.service";
import { IUserLogInResponse, IUserSignUpResponse } from "../shared/user.interface";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent {
  constructor(
    protected logInService: LogInService,
    private authService: AuthService,
    protected route: Router
  ) {}

  switchLogInButton: boolean = false;
  isLoading: boolean = false;
  protected isAuthenticated: boolean = false;

  errorMessage: string = null;

  onLogIng(user: NgForm) {
    this.isLoading = true;
    this.authService
      .onLogIn({ ...user.value, returnSecureToken: true })
      .subscribe(
        (logUser: IUserLogInResponse) => {
          this.isLoading = false;
          if(logUser.registered){
            console.log("The Logged User:: ",logUser)
            this.isAuthenticated = logUser.registered;
            this.route.navigate(["recipes"])
          }
        },
        (error) => {
          this.isLoading = false;
          this.errorMessage = error
        }
      );
  }

  onSignUp(user: NgForm) {
    this.isLoading = true;
    this.authService
      .onSignUp({ ...user.value, returnSecureToken: true })
      .subscribe(
        (userRes) => {
          this.isLoading = false;
          console.log(userRes);
        },
        (error) => {
          this.isLoading = false;
          this.errorMessage = error
        }
      );
  }

  onSwitchLoginButton() {
    this.switchLogInButton = !this.switchLogInButton;
  }

  onSummit(form: NgForm) {
    console.log(form.value);
  }
}
