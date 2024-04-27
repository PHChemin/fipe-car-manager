import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../model/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: '../../assets/resources/style/css/custom.css'
})
export class RegisterComponent {
  user: string = "";
  password: string = "";
  confirmPassword: string = "";
  userTouched: boolean = false;
  passwordTouched: boolean = false;

  users: User[] = [];

  validateUser(){
    // Expressão REGEX para validar se tem letras e números apenas
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(this.user);
  }

  validatePassword(){
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;
    return regex.test(this.password);
  }

  validateConfirmPassword(){
    return this.password === this.confirmPassword;
  }

  validateInformations(): boolean {
    return this.validateUser() && this.validatePassword() && this.validateConfirmPassword();
  }

  saveUser(){
    // TODO arrumar para usar junto do SERVICE
    // Apenas provisório
    let user: User = new User (this.user, this.password);
    user.setId(this.users.length);
    this.users.push(user);
    console.log(this.users);
  }
}
