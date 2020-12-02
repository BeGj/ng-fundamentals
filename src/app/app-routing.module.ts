import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  EventRouteGuard,
  EventListResolver,
  EventListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent
} from './events/index';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent, resolve: { events: EventListResolver }},
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteGuard]},
  { path: 'events/sessions/new', component: CreateSessionComponent, canDeactivate: ['canDeactivateCreateEvent']},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
