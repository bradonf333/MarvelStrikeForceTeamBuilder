import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/AuthService/auth.service';
import { ConfirmPasswordValidator } from './ConfirmPasswordValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(public authService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]]
      },
      { validator: ConfirmPasswordValidator.MatchPassword }
    );
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  /** If any validation Errors then Disable the Submit Button */
  disableButton() {
    if (
      this.email.hasError('required') ||
      this.email.hasError('email') ||
      this.password.hasError('required') ||
      this.password.hasError('minlength') ||
      this.confirmPassword.hasError('required') ||
      this.confirmPassword.hasError('confirmPassword')
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
    } else if (validator.hasError('confirmPassword')) {
      return 'Passwords must match';
    } else {
      return '';
    }
  }
}
