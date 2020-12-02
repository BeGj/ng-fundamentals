import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ToastService } from 'src/app/common/toast.service';
import { IEvent, EventService } from '../shared';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: IEvent[]= [];
  constructor(
    private route: ActivatedRoute,
    private eventsService: EventService,
    private toastService: ToastService
    ) { }

  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }

  handleThumbnailClick(eventName: string): void {
    this.toastService.success(eventName);
  }

}
