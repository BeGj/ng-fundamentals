import { EventService } from './shared/event.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventRouteGuard implements CanActivate {
  constructor(private eventService: EventService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id: number = +route.params.id;
      const eventExists = !!this.eventService.getEvent(id);
      if (!eventExists) {
        this.eventNotFound();
      }
      return eventExists;
  }

  eventNotFound(): void {
    this.router.navigate(['/404']);
    console.warn('Even not found');

  }

}
