// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service'; // Ensure the path is correct

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  credentials = {
    username: '', 
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    //this.credentials[target.id] = target.value; 
  }

  async handleClick(event: Event) {
    event.preventDefault();

    try {
      await this.authService.register(this.credentials); // Call the register method directly
      this.router.navigate(['/login']); // Navigate to login after successful registration
    } catch (err) {
      console.error; // Show error message if registration fails
    }
  }
}