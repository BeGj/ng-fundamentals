import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {
  TOASTR_TOKEN,
  Toastr,
  JQUERY_TOKEN,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { checkDirtyState } from './checkDirtyState';

import {
  EventRouteGuard,
  EventService,
  EventListResolver,
  EventListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteSessionComponent,
  DurationPipe
} from './events/';
import { AuthService } from './user/shared';
declare let toastr: Toastr;
declare let jQuery: any;
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteSessionComponent,
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQUERY_TOKEN, useValue: jQuery},
    EventRouteGuard,
    EventListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
