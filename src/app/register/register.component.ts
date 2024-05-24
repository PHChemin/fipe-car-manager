import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../model/User';
import { UserService } from '../services/user.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: '../../assets/resources/style/css/custom.css'
})
export class RegisterComponent implements OnInit {
  user: string = "";
  password: string = "";
  confirmPassword: string = "";
  userTouched: boolean = false;
  passwordTouched: boolean = false;
  message: string = "";
  users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.getUsers()
    .then(users => {
      this.users = users;
    })
    .catch(error => {
      console.error("Erro ao carregar os usuários");
    });
  }

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
    console.log(this.users);
    // Fazendo uma requisição para Validar se está atualizado a lista de usuários
    this.userService.getUsers()
    .then(users => {
      this.users = users;
    })
    .catch(error => {
      console.error("Erro ao carregar os usuários");
    });

    let u: User = new User(this.user, this.password, (this.users.length+1));
    console.log(u);

    // Verificando se o usuário ja existe
    if(this.userService.isExisting(u, this.users)){
      this.message = "AlreadyExist";
    }else {
      // Salvando no Local Storage
      this.userService.saveUser(u)
      .then(message => {
        this.message = "Created"
      })
      .catch(error => {
        this.message = "Error";
      })
      
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
