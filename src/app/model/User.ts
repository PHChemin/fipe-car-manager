export class User {
   id: number = 0;
   name: string = "";
   private user: string;
   private password: string;
   email: string = "";

    // TODO Ajeitar bem certinhos os métodos do objeto

   constructor(user: string, password: string){
    this.user = user;
    this.password = password;
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