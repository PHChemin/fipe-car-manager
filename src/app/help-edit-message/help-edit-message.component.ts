import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-help-edit-message',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './help-edit-message.component.html',
  styleUrl: './help-edit-message.component.css'
})
export class HelpEditMessageComponent {
  showMessage: boolean = false;

  showHelp(){
    this.showMessage = true;
  }
}
