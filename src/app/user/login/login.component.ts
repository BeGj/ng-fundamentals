import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../shared/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';
  mouseoverLogin = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  login(formValues: ({ userName: string; password: string})): void {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
