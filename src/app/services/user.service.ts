import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'http://localhost:3000/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  async getUsers(): Promise<User[]> {
    try {
      // Nossa variável que armazena a Observable
      const response$ = this.http.get<User[]>(this.URL);
      // Variável que armazena o valor retornado da requisição
      const response = await lastValueFrom(response$);
      return response;
    } catch (error) {
      console.error('Aconteceu o seguinte erro:', error);
      // Relança o Erro para que possa ser tratado no componente
      throw error;
    }
  }

  isExisting(user: User, usersSaved: User[]): boolean{
    return usersSaved.some(existUser => existUser.username == user.username);
  }

  async saveUser(user: User): Promise<User>{
    try{
      const response$ = this.http.post<User>(this.URL, JSON.stringify(user), this.httpOptions);
      const response = await lastValueFrom(response$);
      return response;
    }catch(error) {
      throw error;
    }
  }
  
}