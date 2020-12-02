import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { restrictedWordsValidator, SessionBase } from '../shared';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter<SessionBase>();
  @Output() cancelAddSession = new EventEmitter();
  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;

  constructor() { }



  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWordsValidator(['foo','bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(value: any): void {
    const session: SessionBase = {
      name: value.name,
      duration: +value.duration,
      level: value.level,
      presenter: value.presenter,
      abstract: value.abstract,
    };
    console.log(session);
    this.saveNewSession.emit(session);
  }

cancel(): void {
  this.cancelAddSession.emit();
}


}
