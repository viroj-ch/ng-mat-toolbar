import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }
  loginUserData = {}
  error: string

  loginUser(){

    //console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => console.log(res),
      err => {
        console.log(err);
        this.error =err.message;
      }
    )
  }

  // form: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  // submit() {
  //   if (this.form.valid) {
  //     this.submitEM.emit(this.form.value);
  //   }
  // }
  // @Input() error: string | null;

  // @Output() submitEM = new EventEmitter();
}
