import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../../interfaces/User.interface";
import { Observable } from "rxjs";

const httpOptions = {
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

  constructor(private http: HttpClient) {}

  loginUser = (userData): Observable<User> => {
    return this.http.post<User>(`${this.baseUrl}/login`, userData);
  };

  signupUser = (newUserData: User): Observable<User> => {
    return this.http.post<User>(`${this.baseUrl}/signup`, newUserData, httpOptions);
  };

  logoutUser = () => {
    localStorage.removeItem("FBIdToken");
    httpOptions.headers = httpOptions.headers.delete("Authorization");
  };

  getUserData = (): Observable<User> => {
    return this.http.get<User>(`${this.baseUrl}/user`, httpOptions);
  };

  setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem("FBIdToken", FBIdToken);
    httpOptions.headers = httpOptions.headers.set(
      "Authorization",
      FBIdToken
    );
  };
}
