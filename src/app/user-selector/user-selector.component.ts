import { Component } from '@angular/core';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.css']
})
export class UserSelectorComponent {
  users: string[] = ['User 1', 'User 2', 'User 3'];
  selectedUser: string = '';

  goToNext() {
    // Implement navigation logic to move to the next step/question
  }
}