import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';

export class User {
  constructor(
    public status: string,
  ) { }

}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiUrl = environment.api;
  constructor(
    private httpClient: HttpClient
  ) {
  }


  login(data) {
      return this.httpClient.post(this.apiUrl + `login`, data);
    }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    console.log("user name ", user)
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
