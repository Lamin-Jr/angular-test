import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(protected authService: AuthService) { }

  ngOnInit() {
  }

  onLogIn(): void {
    this.authService.logIn()
  }
  onLogOut() {
    this.authService.logOut()
  }

}
