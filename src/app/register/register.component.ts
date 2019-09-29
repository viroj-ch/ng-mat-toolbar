import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }
  registerUserData = {}
  error: string 

  registerUser(){

    //console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => console.log(res),
      err => {
        console.log(err);
        this.error =err.message;
      }
    )
      
  }
}
