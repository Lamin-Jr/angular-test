import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective  implements OnInit{

  
  constructor(private render: Renderer2, private elRef: ElementRef) { }
  
  @HostListener("mouseover") mouseOver (){
    this.render.setStyle(this.elRef.nativeElement, "background-color", "brown")

  }
  @HostListener("mouseout") mouseOut (){
    this.render.setStyle(this.elRef.nativeElement, "background-color", "yellow")

  }
  ngOnInit(){
    this.render.setStyle(this.elRef.nativeElement, "background-color", "transparent")
  }
}
