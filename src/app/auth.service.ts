import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  private _url = "http://localhost:3000/api";
  private _registerUrl = this._url + "/register";
  private _loginUrl = this._url + "/login";


  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }
}
