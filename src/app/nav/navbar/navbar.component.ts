import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/shared';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {  }

}
