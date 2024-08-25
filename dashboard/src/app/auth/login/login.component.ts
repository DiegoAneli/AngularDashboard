import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'Login Page';

  username: string = '';
  password: string = '';

  onLogin() {
    console.log(`Login attempted with username: ${this.username} and password: ${this.password}`);
  }
}
