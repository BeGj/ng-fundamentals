import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote-session',
  templateUrl: './upvote-session.component.html',
  styleUrls: ['./upvote-session.component.scss']
})
export class UpvoteSessionComponent implements OnInit {
  @Input() count = 0;
  @Input() voted: boolean | undefined = false;
  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.vote.emit();
  }

}
