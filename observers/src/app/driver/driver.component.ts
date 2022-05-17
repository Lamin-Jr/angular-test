import {
  AfterViewInit,
  Component,
  Inject,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { Observable, Subscription } from "rxjs";
import { nextTick } from "process";

@Component({
  selector: "app-driver",
  templateUrl: "./driver.component.html",
  styleUrls: ["./driver.component.css"],
})
export class DriverComponent implements OnInit, OnDestroy{
  speedCounter: number = 0;
  subController: Subscription;


  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {}
  ngOnDestroy(): void {
    this.subController.unsubscribe()
}

  ngOnInit() {
    const customObserver = Observable.create(observer=> {
      let whichPlatform = this.platformId;
      let changeInTime = 0;
      setInterval(()=>{
        changeInTime++;
        observer.next(whichPlatform)
        if(changeInTime > 5) {
          whichPlatform = "Switching to Phone-browser";
          observer.next(whichPlatform)
        }
        if(changeInTime == 10){
          observer.complete()
        }
      }, 1000)
    })

    this.subController = customObserver.subscribe(next => {
      console.log(next)
  
    }, error => {console.log(error)}, ()=>{
      alert("yeay we are done😀")
    });
    
  }

 

  startEngin() {
    console.log("engin Started");
  }
  stopEngin() {
    console.log("engin Stoped");
  }
}
