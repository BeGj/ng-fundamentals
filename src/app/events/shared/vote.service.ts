import { ISession } from '.';
import { Injectable } from '@angular/core';

import { AuthService } from 'src/app/user/shared';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private authService: AuthService) { }

  removeVote(session: ISession): void {
    if(!this.authService.currentUser) {
      return undefined;
    }
    session.voters = session.voters.filter(voter => voter !== this.authService.currentUser?.userName);
  }
  addVote(session: ISession): void {
    if(!this.authService.currentUser) {
      return undefined;
    }
    session.voters.concat(this.authService.currentUser.userName);
  }
  userHasVoted(session: ISession): boolean | undefined {
    if(!this.authService.currentUser) {
      return undefined;
    }
    return session.voters.indexOf(this.authService.currentUser.userName) > -1;
  }
}
