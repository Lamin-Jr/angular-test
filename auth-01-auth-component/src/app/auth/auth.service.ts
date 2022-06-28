import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { LogInService } from "../shared/login.service";
import { IUser } from "../shared/user.interface";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(
    private http: HttpClient,
    protected logInService: LogInService,
    protected route: Router
  ) {}

  onLogIn(user: IUser) {
    return this.logInService.onLogIn(user).pipe(
      catchError((logInError) => {
        const errorHandler = logInError.error.error.message;
        let errorMessage = null;

        switch (errorHandler) {
          case "EMAIL_NOT_FOUND":
            errorMessage = "email not found";
            break;
          default:
            errorMessage = errorHandler;
        }
        return throwError(errorMessage);
      })
    );
  }

  onSignUp(user: IUser) {
    return this.logInService.onSignUp(user).pipe(
      catchError((error) => {
        const errorHandler = error.error.error.message;
        let errorMessage = null;

        switch (errorHandler) {
          case "EMAIL_EXISTS":
            errorMessage = "email already exist";
            break;
          default:
            errorMessage = errorHandler;
        }

        return throwError(errorMessage);
      })
    );
  }
}
