import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { AuthService } from 'src/app/user/shared';
import { ISession, sortByNameAsc, sortByVotesDesc, VoteService } from './../shared/';

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
  constructor(private voteService: VoteService, private authService: AuthService) { }

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
  toggleVote(session: ISession): void {
    if(this.userHasVoted(session)) {
      this.voteService.removeVote(session);
    } else {
      this.voteService.addVote(session);
    }
    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }
  userHasVoted(session: ISession): boolean | undefined {
    const hasVoted = this.voteService.userHasVoted(session);
    return hasVoted;
  }

}
