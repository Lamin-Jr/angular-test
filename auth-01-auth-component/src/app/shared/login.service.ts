import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { IUser, IUserLogInResponse, IUserSignUpResponse } from "./user.interface";

// const APIKey = environment.authApi;

@Injectable({ providedIn: "root" })
export class LogInService {
  constructor(protected http: HttpClient) {}

  onSignUp(user: IUser) {
    return this.http.post<IUserSignUpResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.authApi}`,
      user
    );
  }

  onLogIn(user: IUser) {
    return this.http.post<IUserLogInResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.authApi}`,
      user
    );
  }
}
