import { afterNextRender } from "@angular/core";

export class WebStorageUtil {

    static get(key: string): any {
        afterNextRender(() => {
            return JSON.parse(localStorage.getItem(key)!);
        });
    }

    static set(key: string, value: any) {
        afterNextRender(() => {
            localStorage.setItem(key, JSON.stringify(value));
        });
    }
}