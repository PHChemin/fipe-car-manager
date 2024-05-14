import { UserLocalStorageService } from './../services/user-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../model/User';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
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
  message: string = "";

  constructor(private userService: UserLocalStorageService){}

  // Métodos de Validação com Regex
  validateUser(){
    // Expressão REGEX para validar se tem letras e números apenas
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(this.user);
  }

  validatePassword(){
    // Expressão REGEX para validar se tem 6 caracteres sem espaços em branco
    const regex = /^\S{6,}$/;
    return regex.test(this.password);
  }

  validateConfirmPassword(){
    return this.password === this.confirmPassword;
  }

  validateInformations(): boolean {
    return this.validateUser() && this.validatePassword() && this.validateConfirmPassword();
  }

  // Método para criação do usuário
  onSubmit(){
    let u: User = new User(this.user, this.password);
    // Verificando se o usuário ja existe
    if(this.userService.isExisting(u)){
      this.message = "AlreadyExist";
    }else {
      // Salvando no Local Storage
      this.userService.saveUser(u);
      this.message = "Created"
    }
    // Limpando os Inputs
    this.user = "";
    this.password = "";
    this.confirmPassword = "";
    this.userTouched = false;
    this.passwordTouched = false;
  }

  // Limpar a mensagem da tela
  onInputFocus(){
    this.message = "";
  }
}
