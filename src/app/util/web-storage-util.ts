import { afterNextRender } from "@angular/core";

export class WebStorageUtil {

    static get(key: string): any {
        return JSON.parse(localStorage.getItem(key)!);
    }

    static set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}