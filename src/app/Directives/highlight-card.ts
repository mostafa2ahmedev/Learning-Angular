import { Directive, ElementRef, HostListener, input, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true,
})
export class HighlightCard {
  // ele: ElementRef;
  @Input()
  externalColor: string = 'black';
  @Input('appHighlightCard')
  defaultColor: string = 'red';
  constructor(private ele: ElementRef) {
    // this.ele = ele;
    //There is a minor issue here
    //That the defaultColor will be with"red" because the constructor called
    //before the vales comes in
    ele.nativeElement.style.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseover')
  over() {
    this.ele.nativeElement.style.backgroundColor = this.externalColor;
  }

  @HostListener('mouseout')
  out() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
