import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../model/User';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  logginError: boolean = false;

  constructor(private loginService: LoginService){}

  async onSubmit(){
    console.log(this.loginService.asObservable());

    const logged = await this.loginService.login(this.username, this.password)
    if (!logged){
      this.logginError = true;
      console.log("erro");
    }
    console.log(this.loginService.asObservable());
  }
}
