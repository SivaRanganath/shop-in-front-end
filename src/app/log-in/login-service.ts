import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {

  }

  signUpUser(userDetails: any) {
    let user = {
      name: userDetails?.userName,
      email: userDetails?.email,
      password: userDetails?.password
    }
     this.http.post(this.baseUrl + 'signup', user).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
     })
  }
}
