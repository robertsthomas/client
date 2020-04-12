import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "src/app/interfaces/User.interface";
import { Observable, observable } from "rxjs";
import { Store } from "@ngrx/store";
import { LoginState } from "src/app/pages/auth/login/store";
import * as fromActions from "../../pages/auth/login/store/login.actions";

let httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  baseUrl: string =
    "https://us-central1-easy-tools-e0a4b.cloudfunctions.net/api";

  constructor(private http: HttpClient, private store: Store<LoginState>) {}

  loginUser = (userData) => {
    const userObserver = {
      next: (user) => {
        console.log(user);
        this.store.dispatch(fromActions.loadLoginSuccess(user));
        this.setAuthorizationHeader(user.token);
      },
    };
    const tok = this.http.post<User>(`${this.baseUrl}/login`, userData);

    tok.subscribe(userObserver);
    tok.toPromise().then(({ token }) => {
      this.getUserData(token).subscribe((user) => console.log(user));
    });
  };

  signupUser = async (newUserData: User) => {
    await this.http.post(`${this.baseUrl}/signup`, newUserData, httpOptions);
  };

  logoutUser = () => {
    localStorage.removeItem("FBIdToken");
    httpOptions.headers = httpOptions.headers.delete("Authorization");
  };

  getUserData = (token): Observable<User> => {
    return this.http.get<User>(`${this.baseUrl}/user`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
  };

  setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem("FBIdToken", FBIdToken);
    httpOptions.headers = httpOptions.headers.set("Authorization", FBIdToken);
  };
}
