import { Vehicle } from "./Vehicle";

export class User {
   id: number = 0;
   name: string = "";
   username: string;
   password: string;
   email: string = "";
   vehicles: Vehicle[];

    // TODO Ajeitar bem certinhos os métodos do objeto

   constructor(username: string, password: string){
    this.username = username;
    this.password = password;
    this.vehicles = [];
   }

   public getUsername(): string {
      return this.username;
   }

   public setName(name: string): void{
    this.name = name;
   }

   public setId(id: number): void {
    this.id = id;
   }

   public setEmail(email: string): void {
    this.email = email;
   }
}