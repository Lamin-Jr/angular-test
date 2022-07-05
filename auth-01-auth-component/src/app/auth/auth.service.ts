import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import {
  IUser,
  IUserLogIngResponse,
  IUserSignUpResponse,
} from "../shared/user.interface";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(protected http: HttpClient) {}
  user = new BehaviorSubject<IUserSignUpResponse>(null);

  onLogIn(user: IUser) {
    return this.http
      .post<IUserLogIngResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.AuthApiKey}`,
        { ...user, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleLogInError),
        tap((userLogInRes) => {
          // this.user.next(userLogInRes);
          localStorage.setItem("userSecret", JSON.stringify(userLogInRes));
          this.user.next(JSON.parse(localStorage.getItem("userSecret")))
        })
      );
  }
  onSignUp(user: IUser) {
    return this.http
      .post<IUserSignUpResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.AuthApiKey}`,
        { ...user, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleLogInError),
        tap((userSignUpRes) => {
          localStorage.setItem("userSecret", JSON.stringify(userSignUpRes));
          this.user.next(JSON.parse(localStorage.getItem("userSecret")));
        })
      );
  }

  onLogOut() {
    this.user = null;
    localStorage.removeItem("userSecret")
  }

  handleLogInError(error: HttpErrorResponse) {
    const errorHandler = error.error.error.message;
    let errorMessage = "Unknown Error Occurs";

    switch (errorHandler) {
      case "EMAIL_EXISTS":
        errorMessage = "Email already exist";
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = "Email not found";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "Password is invalid";
    }
    return throwError(errorMessage);
  }
}
