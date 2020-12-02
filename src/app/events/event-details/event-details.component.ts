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
    const id: number = +this.route.snapshot.params.id;
    this.event = this.eventService.getEvent(id);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(sessionBase: SessionBase): void {
    const syncedSession = this.eventService.createSession(this.event.id, sessionBase);
    this.event.sessions.push(syncedSession);
    this.addMode = false;
  }
  cancelAddSession(): void {
    this.addMode = false;
  }
}
