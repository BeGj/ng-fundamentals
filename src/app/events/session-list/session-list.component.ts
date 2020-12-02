import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISession, sortByNameAsc, sortByVotesDesc } from './../shared/';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[] = [];
  @Input() filterBy = 'all';
  @Input() sortBy = 'name';
  visibleSessions: ISession[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.sessions?.length > 0) { // if sessions recieved
      // Filter sessions
      this.filterSessions(this.filterBy);
      // And sort sessions
      if (this.sortBy === 'name') {
        this.visibleSessions.sort(sortByNameAsc);
      } else {
        this.visibleSessions.sort(sortByVotesDesc);
      }
    }
  }

  ngOnInit(): void {
  }


  filterSessions(filterBy: string): void{
    if (filterBy === 'all') {
      this.visibleSessions = [
        ...this.sessions
      ];
    } else {
      this.visibleSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() === filterBy);
    }
  }

}
