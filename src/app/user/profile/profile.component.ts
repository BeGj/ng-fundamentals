import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser?.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser?.lastName, Validators.required);

    this.profileForm = new FormGroup( {
      firstName: this.firstName,
      lastName: this.lastName
    });
  }


  save(profileFormValue: any): void {
    if (this.profileForm.valid) {
      this.authService.updateUser(profileFormValue.firstName, profileFormValue.lastName);
      this.router.navigate(['events']);
    }
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }
  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }
}
