import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  loginForm: FormGroup;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  /** If any validation Errors then Disable the Submit Button */
  disableButton() {
    if (
      this.email.hasError('required') ||
      this.email.hasError('email') ||
      this.password.hasError('required') ||
      this.password.hasError('minlength')
    ) {
      return true;
    } else {
      return false;
    }
  }

  /** Get FormControl Error Messages */
  getErrorMessage(validator: FormControl) {
    if (validator.hasError('required')) {
      return 'You must enter a value';
    } else if (validator.hasError('email')) {
      return 'You must enter a valid email';
    } else if (validator.hasError('minlength')) {
      return 'You have not met the Minimum Length';
    } else {
      return '';
    }
  }
}
