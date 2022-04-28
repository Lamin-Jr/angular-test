import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  // @ViewChild("recipe") recipeLink: ElementRef;
  // @ViewChild("shop") shopLink: ElementRef;

  @Output() toDisplay = new EventEmitter<string>();


  onClickList(event:HTMLElement){
    
    if(event.innerHTML === "Recipes") {
      this.toDisplay.emit(event.innerHTML)
    }else {
      this.toDisplay.emit(event.innerHTML)
    }

  }
}
