import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/shared/models/RequestLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public RequestLogin: RequestLogin = new RequestLogin;

  constructor() { }

  ngOnInit(): void {
    this.RequestLogin = new RequestLogin();
  }

  public doLogin() :void{
    console.log(this.RequestLogin);
  }

}
