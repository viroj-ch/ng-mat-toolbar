import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private _url = "http://localhost:3000/api";
  private _registerUrl = this._url + "/register";
  private _loginUrl = this._url + "/login";


  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn(){
    // !! linkage , token exists return true, absent retrun false 
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    console.log('navigate /events')
    this._router.navigate(['/events'])
  }
}


