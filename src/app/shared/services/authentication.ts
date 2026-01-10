import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AppComponentBase } from '../../app-component-base';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends AppComponentBase {
  private isUserAuthorized = false;
  private isAuthChecked = false;

  constructor(private http: HttpClient, injector: Injector) {
    super(injector);
  }

  // authenticateUser() {
  //   if (this.isAuthChecked) {
  //     return true;
  //   }
  //   this.http.get(this.baseUrl + 'authenticateUser', {
  //     withCredentials: true
  //   }).subscribe({
  //     next: (res) => {
  //       this.isUserAuthorized = true;
  //       return this.isUserAuthorized;
  //     },
  //     error: (err) => {
  //       this.isUserAuthorized = false;
  //       return this.isUserAuthorized;
  //     }
  //   });
  //   return this.isUserAuthorized;
  // }

  authenticateUser(): Observable<boolean> {
    if (this.isAuthChecked) {
      return of(this.isUserAuthorized);
    }

    return this.http
      .get(
        this.baseUrl + 'authenticateUser',
        { withCredentials: true }
      )
      .pipe(
        tap(res => {
          this.isUserAuthorized = true;
          this.isAuthChecked = true;
        }),
        map(() => true),
        catchError(() => {
          this.isUserAuthorized = false;
          this.isAuthChecked = true;
          return of(false);
        })
      );
  }

  

  isLoggedIn() {
    return this.isUserAuthorized;
  }

  setLoggedIn() {
    this.isUserAuthorized = true;
  }
}
