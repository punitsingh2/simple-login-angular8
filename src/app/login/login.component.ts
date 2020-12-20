import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(
    private route: Router,
    private loginService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginService.login({
      userName: this.username,
      password: this.password
    }).subscribe((response:any) => {
        localStorage.setItem('token', response.token);
        sessionStorage.setItem('username', this.username);
        this.route.navigate([''])
        this.invalidLogin = false
      
    }, err => {
      console.log(err)
      this.invalidLogin = true
    });
   
  }
}
