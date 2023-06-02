import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {
@Input('appCustom') message!:string;
  constructor(private ele:ElementRef,private render:Renderer2) { }
  ngOnInit(): void {
    //this.ele.nativeElement.style.backgroundColor='green';
  }


  @HostListener('click') onClick(){
      this.ele.nativeElement.innerHtml=this.message;
      this.render.setStyle(this.ele.nativeElement,'color','violet');
  }

}
