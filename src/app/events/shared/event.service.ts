import { IEvent } from './models/event.interface';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { events } from './events';
import { events as importedEvents } from './events';
import { SessionBase, ISession } from './models/session.interface';
import { delay, mergeMap } from 'rxjs/operators';

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

  getEvent(id: number): IEvent | undefined {
    const event: IEvent | undefined = this.events.find(e => e.id === id);
    if (!event){
      return undefined;
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
  createSession(eventId: number, sessionBase: SessionBase): ISession | undefined {
    const oldEvent = this.getEvent(eventId);
    if (!oldEvent) {
      return undefined;
    }
    const nextId = Math.max.apply(null, oldEvent.sessions.map(s => s.id));
    const newSession = {
      voters: [],
      ...sessionBase,
      id: nextId,
      eventId
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
  searchSessions(searchTerm: string): Observable<ISession[]> {
    const term = searchTerm.toLocaleLowerCase();
    let results: ISession[] = [];
    this.events.forEach(event => {
      const matchingSessions = event.sessions.filter(session => session.name.toLocaleLowerCase().indexOf(term) > -1);
     /*  matchingSessions = matchingSessions.map(session => {
        session.eventId = event.id;
        return session;
      }); */
      results = results.concat(matchingSessions);
    });
    return of(results).pipe(delay(700));
  }
  updateEvent(updatedEvent: IEvent): void {
    const eventIndex = this.events.findIndex(event => event.id === updatedEvent.id);
    this.events[eventIndex] = updatedEvent;
  }
}

