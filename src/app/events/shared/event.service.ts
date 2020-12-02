import { IEvent } from './models/event.interface';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { events } from './events';
import { events as importedEvents } from './events';
import { SessionBase, ISession } from './models/session.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: IEvent[] = importedEvents;
  constructor() { }

  getEvents(): Observable<IEvent[]> {
    const subject = new Subject<IEvent[]>();
    setTimeout(() => {
      subject.next(events);
      subject.complete();
    }, 200);
    return subject;
  }

  getEvent(id: number): IEvent {
    const event: IEvent | undefined = this.events.find(e => e.id === id);
    if (!event){
      throw Error('No event with id '+id+' found');
    }
    return event;
  }
  createEvent(formValues: any): IEvent{
    const nextId = Math.max.apply(null, this.events.map(e => e.id));
    const newEvent = {
      sessions: [],
      ...formValues,
      id: nextId,
    };
    this.events.push();
    return newEvent;
  }
  createSession(eventId: number, sessionBase: SessionBase): ISession {
    const oldEvent = this.getEvent(eventId);
    const nextId = Math.max.apply(null, oldEvent.sessions.map(s => s.id));
    const newSession = {
      voters: [],
      ...sessionBase,
      id: nextId,
    };
    const updatedEvent: IEvent = {
      ...oldEvent,
      sessions: [
        ...oldEvent.sessions,
        newSession
      ]
    };
    this.updateEvent(updatedEvent);
    return newSession;
  }

  updateEvent(updatedEvent: IEvent): void {
    const eventIndex = this.events.findIndex(event => event.id === updatedEvent.id);
    this.events[eventIndex] = updatedEvent;
  }
}

