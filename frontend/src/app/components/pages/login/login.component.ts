// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service'; // Adjust path as necessary

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const key = target.id as keyof typeof this.credentials;

    // Ensure the key exists in the credentials object
    if (key in this.credentials) {
      this.credentials[key] = target.value;
    }
  }

  async handleClick(event: Event) {
    event.preventDefault(); // Prevent default form submission

    try {
      // Call the login method from AuthService and await its result
      const result = await this.authService.login(this.credentials);

      // Check if login was successful and navigate to the home page
      if (result) {
        this.router.navigate(['/']);
      } else {
        console.error('Login failed: Invalid credentials');
      }
    } catch (err) {
      // Log detailed error information for debugging
      console.error('An error occurred during login:', err);
    }
  }
}
