import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService
            , private _router: Router) { }

  ngOnInit() {
  }
  registerUserData = {}
  error: string 

  registerUser(){

    //console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token)
        this._router.navigate(['/special'])
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status===0){
            this.error = err.message
          } else {
            this.error = err.error
          }
        }
      }
    )
      
  }
}
