import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { DriverService } from "./driver.service";

@Component({
  selector: "app-driver",
  templateUrl: "./driver.component.html",
  styleUrls: ["./driver.component.css"],
})
export class DriverComponent implements OnInit, OnDestroy {
  speedCounter: number = 0;
  subController: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    protected driverService: DriverService
  ) {}
  ngOnDestroy(): void {
    this.subController.unsubscribe();
  }

  ngOnInit() {
    const customObserver = Observable.create((observer) => {
      let whichPlatform = this.platformId;
      console.log("service speed",  this.driverService.speed )

      setInterval(() => {
       this.driverService.speed +=1;
        this.speedCounter = this.driverService.speed;
        observer.next(whichPlatform);
        if (this.speedCounter > 5) {
          whichPlatform = "Switching to Phone-browser";
          observer.next(whichPlatform);
        }
        if (this.speedCounter == 10) {
          observer.complete();
        }
      }, 1000);
    });

    this.subController = customObserver.subscribe(
      (next) => {
        console.log(next);
      },
      (error) => {
        console.log(error);
      },
      () => {
        alert("yeay we are done😀");
      }
    );
  }

  startEngin() {
    console.log("engin Started");
  }
  stopEngin() {
    console.log("engin Stoped");
  }
}
