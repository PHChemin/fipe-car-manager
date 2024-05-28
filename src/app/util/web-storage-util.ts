import { Injectable } from '@angular/core';
import { Constants } from "./constants";

@Injectable({
  providedIn: 'root'
})

export class WebStorageUtil {

    static getItem(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
          try {
            if (!localStorage) {
                throw new Error("O local storage não está disponível.");
            }

            const data = localStorage.getItem(key) || '';
            resolve(JSON.parse(data));
          } catch (error) {
            reject(error);
          }
        });
    }

    static get(key: string): any {
        return JSON.parse(localStorage.getItem(key)!);
    }

    static set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}