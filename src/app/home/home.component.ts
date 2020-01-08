import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit() {
  }
  onLoadServers(id: number){
    // comple calculations
    this.router.navigate(["/servers", id, 'edit'], {queryParams:{allowEdit:'1'}, fragment: 'Loading'});
  }
  onLogin(){
   this.authService.logIn();
  }
  onLogOut(){
    this.authService.logout();

  }
}
