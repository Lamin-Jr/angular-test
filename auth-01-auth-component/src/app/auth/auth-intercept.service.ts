import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()
export class AutthServiceInterceptor implements HttpInterceptor {
  constructor(protected authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((userSubject) => {

        // console.log("request check", req.url)
        if (!userSubject) {
          return next.handle(req);
        }
        const handleRecipeHeader = req.clone({
          params: new HttpParams().set("auth", userSubject.idToken),
        });
        return next.handle(handleRecipeHeader);
      })
    );
  }
}
