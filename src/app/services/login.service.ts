import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, lastValueFrom } from 'rxjs';
import { Constants } from '../util/constants';
import { WebStorageUtil } from '../util/web-storage-util';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private readonly API_URL = `${environment.apiUrl}/users`;
  private loginStatus = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  async login(username: string, password: string): Promise<boolean>{
    try {
      // Requisição para a API Fake usando como parâmetros de rota o username e password
      // Caso exista vai retornar uma array de objetos User
      // Se não retorna um erro, captado pelo Catch
      const request = this.http.get<User[]>(`${this.API_URL}?username=${username}&password=${password}`);
      const response = await lastValueFrom(request);
      
      // Verificamos se a array não está vazia
      if(response.length > 0){

        // Pegando o usuário da posição 0 (unico usuário da Array)
        const user = response[0];

        // Usando o Local Storage para depois verificar se o usuário está logado
        WebStorageUtil.set(Constants.LOGGED_IN_KEY, true);
        WebStorageUtil.set(Constants.USERID_KEY, user.id);
        //localStorage.setItem(Constants.LOGGED_IN_KEY, JSON.stringify(true));
        //localStorage.setItem(Constants.USERID_KEY, JSON.stringify(user.id));

        this.loginStatus.next(true);
        this.router.navigate(['/land-page']);
        return true;
      }else {
        // Siginifica que a array está vazia
        // Ou seja o usuário não foi encontrado
        WebStorageUtil.set(Constants.LOGGED_IN_KEY, false);
        WebStorageUtil.set(Constants.USERID_KEY, -1);
        console.error("Usuário não encontrado");
        this.loginStatus.next(false);
        return false;
        }
      } catch (error){
        // Caso algum erro aconteça será feito o tratamento a seguir
        WebStorageUtil.set(Constants.LOGGED_IN_KEY, false);
        WebStorageUtil.set(Constants.USERID_KEY, -1);
        console.error("Login Error", error);
        this.loginStatus.next(false);
        return false;
      }
    }

    refreshStatus() {
      this.loginStatus.next(true);
    }

    logout(): void {
      WebStorageUtil.set(Constants.LOGGED_IN_KEY, false);
      WebStorageUtil.set(Constants.USERID_KEY, -1);
      this.loginStatus.next(false);
      this.router.navigate(['/']);
    }

    //isLoggedIn(): boolean {
      //return WebStorageUtil.get(Constants.LOGGED_IN_KEY) === true;
    //}

    async isLoggedIn(): Promise<boolean> {
      try {
        const data = await WebStorageUtil.getItem(Constants.LOGGED_IN_KEY);
        return data === true;
      } catch (error) {
        console.error(error);
        return false; // Se ocorrer um erro, retorne falso
      }
    }
  
    asObservable(): Observable<boolean> {
      return this.loginStatus;
    }
  }