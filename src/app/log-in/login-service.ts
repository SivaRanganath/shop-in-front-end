import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponentBase } from '../app-component-base';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends AppComponentBase {
  constructor(private http: HttpClient, injector: Injector) {
    super(injector)
  }

  signUpUser(userDetails: any): Observable<any> {
    let user = {
      name: userDetails?.userName,
      email: userDetails?.email,
      password: userDetails?.password
    }
    return this.http.post(this.baseUrl + 'signup', user)
  }

    signInUser(userDetails: any): Observable<any> {
      let user = {
        email: userDetails?.email,
        password: userDetails?.password
      }
      return this.http.post(this.baseUrl + 'login', user, 
      { withCredentials: true })
      
    }
} 
