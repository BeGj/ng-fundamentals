import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvent } from '../shared';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event!: IEvent;
  constructor() { }

  ngOnInit(): void {
  }
  getStartTimeStyle(): any {
    const isEarlyStart = this.event && this.event?.time === '8:00 am';
    if (isEarlyStart) {
      return {color: '#003300', 'font-weight': 'bold'};
    }
    return {};
  }
}
