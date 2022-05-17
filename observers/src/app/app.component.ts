import { Component, OnInit } from '@angular/core';
interface IMenu {
  path: string;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  protected menuArray: IMenu[] = [{
    path: "driver",
    name: "driver"
  }, {
    path: "user/1",
    name: "User1"
  },
  {
    path: "user/2",
    name: "User 2"
  }
]
  constructor() {}

  ngOnInit() {}


}
