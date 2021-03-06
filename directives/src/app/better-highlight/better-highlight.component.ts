import { OnInit, ElementRef, Renderer2, Directive, HostListener, HostBinding, Input } from '@angular/core';
@Directive({
  selector: '[appBetterHighlight]]'
})
export class BetterHighlightComponent implements OnInit {

  constructor(private elRef: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event)  {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

  }

  @HostListener('mouseleave') mouseleave(eventData: Event)  {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }


}
