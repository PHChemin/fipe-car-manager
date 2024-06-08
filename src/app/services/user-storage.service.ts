import { Injectable } from "@angular/core";
import { afterNextRender } from "@angular/core";
import { User } from "../model/User";
import { Constants } from "../util/constants";

@Injectable({
    providedIn: 'root',
})

export class UserLocalStorageService {
    users: User[] = [];

    constructor(){
        // afterNextRender(() => {
           // const storedUsers = localStorage.getItem(Constants.USERS_KEY);
           // if (storedUsers) {
           //     this.users = JSON.parse(storedUsers);
           /// }
       // });
    }

    saveUser(user: User): void {
       // this.users.push(user);
       // localStorage.setItem(Constants.USERS_KEY, JSON.stringify(this.users));
    }

    isExisting(user: User): boolean{
        return this.users.some(existUser => existUser.username == user.username);
    }

}