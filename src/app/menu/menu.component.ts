import { afterNextRender } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Constants } from '../util/constants';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit, OnDestroy{
  userIsLoggedIn!: boolean;
  private loginSubscription!: Subscription;


  
  constructor(private loginService: LoginService, private changeDetectorRef: ChangeDetectorRef){
    afterNextRender(() => {
      this.userIsLoggedIn = JSON.parse(localStorage.getItem(Constants.LOGGED_IN_KEY)!);
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnInit(): void {
    this.loginSubscription = this.loginService.asObservable().subscribe(status => {
      this.userIsLoggedIn = status;
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  } 

  async checkLoggedIn(): Promise<void> {
    try {
      this.userIsLoggedIn = await this.loginService.isLoggedIn();
    } catch (error) {
      console.error(error);
    }
  }
}
