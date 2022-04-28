import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayCondition = "Recipes";

  headerSubRoute(event: string){
    this.displayCondition = event;
  }
}
