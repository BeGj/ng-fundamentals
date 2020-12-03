import { Component, OnInit } from '@angular/core';

import { ISession, EventService } from 'src/app/events';
import { AuthService } from 'src/app/user/shared';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  searchTerm = '';
  foundSessions: ISession[] = [];
  constructor(public authService: AuthService, private eventService: EventService) { }
  ngOnInit(): void {  }


  searchSession(searchTerm: string): void {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
