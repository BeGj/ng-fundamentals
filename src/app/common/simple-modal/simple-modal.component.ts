import { Component, Input, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQUERY_TOKEN } from '../jquery.service';
@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent implements OnInit {
  @Input() title!: string;
  @Input() elementId!: string;
  @Input() closeOnBodyClick = true;
  @ViewChild('modalContainer') containerEl!: ElementRef;

  constructor(@Inject(JQUERY_TOKEN) private $: any) { }

  ngOnInit(): void {
  }

  closeModal() {
    if (this.closeOnBodyClick) {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }

}
