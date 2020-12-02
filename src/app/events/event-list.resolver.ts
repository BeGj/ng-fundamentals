import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { IEvent, EventService } from './shared';

@Injectable({
  providedIn: 'root'
})
export class EventListResolver implements Resolve<IEvent[]> {
  constructor(private eventService: EventService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEvent[]> {
    return this.eventService.getEvents().pipe(
      map(events => events));
  }
}
