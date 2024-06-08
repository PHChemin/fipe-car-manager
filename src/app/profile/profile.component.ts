import { Component, OnInit, afterNextRender, ChangeDetectorRef } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { Constants } from '../util/constants';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MenuComponent,
    FooterComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent{
  username!: string;
  password: string = "qwerty";
  name!: string;
  email!: string;
  id!: number;
  message: string = "";
  showName: boolean = true;

  constructor(private loginService: LoginService, private userService: UserService, private cdr: ChangeDetectorRef){
    afterNextRender(() => {
      this.id = JSON.parse(localStorage.getItem(Constants.USERID_KEY)!);
      this.userService.getUser(this.id)
        .then(user => {
          this.username = user.username;
          this.name = user.name;
          this.email = user.email;

          if(this.name == "")
            this.showName = false;

          this.cdr.detectChanges();
        })
        .catch(error => {
          console.error(error);
        })
    });
  }

  onLogout(){
    this.loginService.logout();
  }

  onSubmit(){
    let newInfo = { 
      name: `${this.name}`,
      email: `${this.email}`
    };

    this.userService.updateUser(this.id, newInfo)
    .then(() => {
      this.message = "Success";
      this.showName = true;
      setTimeout(() => {
        this.message = "";
      }, 3000);
    })
    .catch(() => {
      this.message = "Error"
    })
  }
}
