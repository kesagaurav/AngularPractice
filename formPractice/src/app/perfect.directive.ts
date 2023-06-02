import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 ,Input } from '@angular/core';

@Directive({
  selector: '[appPerfect]'
})
export class PerfectDirective implements OnInit {


  @Input() defaultColor="green";
  @Input() highLighColor="pink";
  @HostBinding('style.backgroundColor') backgroundColor: string=this.defaultColor;

  constructor(private render:Renderer2,private ele:ElementRef) {

   }
  ngOnInit(): void {
      //this.render.setStyle(this.ele.nativeElement,'background-color','blue');
      this.backgroundColor=this.highLighColor;
  }

  @HostListener('mouseenter') mouseOver(eventData:Event){
   // this.render.setStyle(this.ele.nativeElement,'background-color','green');
    this.backgroundColor=this.highLighColor;

  }


  @HostListener('mouseleave') mouseOver1(eventData:Event){
    //this.render.setStyle(this.ele.nativeElement,'background-color','blue');
    this.backgroundColor=this.defaultColor;

  }



}
