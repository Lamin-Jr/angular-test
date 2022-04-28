import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[app-basic-directive]',
})
export class BasicDirective implements OnInit {

    constructor(private elementR: ElementRef){
        // this.elementR.nativeElement.backgroundColor = "blue";
    }   

    ngOnInit() {
        console.log("Im the directive")
        this.elementR.nativeElement.style.backgroundColor = "blue";
    }
}