import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAuth: boolean;

  constructor(private authService : AuthService){}

  ngOnInit(){
    this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  logout(){
    this.authService.logout();
    this.onToggle();
  }


onToggle(){
  
}
}
