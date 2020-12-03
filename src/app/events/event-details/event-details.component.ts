import { IEvent } from './../shared/models/event.interface';
import { SessionBase } from './../shared/models/session.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from './../shared/event.service';

@Component({
  //selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event!: IEvent;
  addMode = false;
  filterBy = 'all';
  sortBy = 'name';
  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id: number = +params.id;
      const eventExists: IEvent | undefined = this.eventService.getEvent(id);
      if (eventExists) {
        this.event = eventExists;
        this.addMode = false;
        this.filterBy = 'all';
        this.sortBy = 'name';
      } else {
        console.error('Event could not be found');
      }
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(sessionBase: SessionBase): void {
    const syncedSession = this.eventService.createSession(this.event.id, sessionBase);
    if (syncedSession) {
      this.event.sessions.push(syncedSession);
      this.addMode = false;
    } else {
      console.error('Session could not be created');

    }
  }
  cancelAddSession(): void {
    this.addMode = false;
  }
}
