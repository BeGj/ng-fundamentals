import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '.';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser | undefined = undefined;
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }


  loginUser(userName: string, password: string): void {
    this.currentUser= {
      id: 1,
      userName,
      firstName: 'John',
      lastName: 'Papa',
    };
    this.isAuthenticated.next(true);
  }

  logout(): void{
    this.isAuthenticated.next(false);
  }
  updateUser(firstName: string, lastName: string) {
    if (!this.currentUser) {
      return;
    }
    this.currentUser = {
      ...this.currentUser,
      firstName,
      lastName
    };
  }
}
