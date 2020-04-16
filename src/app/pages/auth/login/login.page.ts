import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/auth/authentication.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: "login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  
  isAuthenticated$: Observable<any>;

  constructor(
    private auth: AuthenticationService,
    public router: Router,
  ) {}

  ngOnInit() {
  }

  login() {
    
  }

}