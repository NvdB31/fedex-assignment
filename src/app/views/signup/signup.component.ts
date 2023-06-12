import { Router } from '@angular/router';
import { Component, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { setUser } from '../../store/user/user.actions';
import { User } from '../../store/user/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  constructor(private router: Router, private http: HttpClient, private store: Store) { }

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  isEmailValid: boolean = false;
  isPasswordValid: boolean = false;
  isLoading: boolean = false;
  isFormValid: boolean = false;

  validateForm(): void {
    this.isFormValid = this.firstName.length > 0 && this.lastName.length > 0 && this.isEmailValid && this.isPasswordValid;
  }

  handleSignup(): void {
    if (this.isFormValid) {
      this.isLoading = true
      const signupData: any = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };

      this.http.post('https://demo-api.now.sh/users', signupData).subscribe({
        next: (response: any) => {
          const user = {
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            id: response._id
          }
          this.store.dispatch(setUser({ user: user as User }));
          this.router.navigate(['/']);
          this.isLoading = false
        },
        error: (error: any) => {
          // @todo: Display an error message or handle the error condition
          this.isLoading = false
        }
      })
    }
  }
}
