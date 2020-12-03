import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared';
import { TOASTR_TOKEN, Toastr } from '../../common/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {

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
      this.toastr.success('Profile saved');
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
