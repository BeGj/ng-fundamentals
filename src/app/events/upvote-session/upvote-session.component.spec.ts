import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvoteSessionComponent } from './upvote-session.component';

describe('UpvoteSessionComponent', () => {
  let component: UpvoteSessionComponent;
  let fixture: ComponentFixture<UpvoteSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpvoteSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvoteSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
