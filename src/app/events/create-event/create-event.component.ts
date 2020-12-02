import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  newEvent: any;
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
  }

  /**
   * cancel
   */
  public cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(values: any): void {
    this.isDirty = false;
    console.log(values);
    this.eventService.createEvent(values);
    this.router.navigate(['/events']);

  }

}
