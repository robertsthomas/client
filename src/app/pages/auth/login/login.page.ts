import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/auth/authentication.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { LoginState } from "./store";
import { User } from "../../../interfaces/User.interface";
import * as fromActions from "./store/login.actions";

@Component({
  selector: "login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  user: User;

  constructor(
    private auth: AuthenticationService,
    public router: Router,
    private store: Store<LoginState>
  ) {}

  ngOnInit() {
    this.store.dispatch(fromActions.loadLogin());
  }

  login = () => {
    const userObserver = {
      next: (user) => {
        console.log(user);
        this.store.dispatch(fromActions.loadLoginSuccess(user));
        this.auth.setAuthorizationHeader(user.token);
      },
      error: (err) => {
        console.log(err);
        this.store.dispatch(fromActions.loadLoginFailure(err));
      },
    };

    this.auth
      .loginUser({ email: "user@email.com", password: "123456" })
   
  };
}
