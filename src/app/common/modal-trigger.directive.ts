import { Directive, OnInit, Inject, ElementRef, Input} from '@angular/core';
import { fromEvent } from 'rxjs';

import { JQUERY_TOKEN } from './jquery.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit{
  @Input('appModalTrigger') modalId!: string;
  private el: HTMLElement;
  constructor(@Inject(JQUERY_TOKEN) private $: any, ref: ElementRef) {
    this.el = ref.nativeElement;
  }
  ngOnInit(): void {
    fromEvent(this.el,'click').subscribe(click => {
      this.$(`#${this.modalId}`).modal({});
    });
  }

}
