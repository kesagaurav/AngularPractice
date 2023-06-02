import { Directive, ElementRef, OnInit,Input, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective implements OnInit {
  @Input('appDemo') message!:String;
  renderer: any;
  constructor(private el:ElementRef) {

  }
  ngOnInit(): void {
    this.el.nativeElement.color="red";
  }

  @HostListener('click') onClick() {
    this.el.nativeElement.innerHTML = this.message;
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }
}
