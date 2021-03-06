import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { User } from '../../models/entities/User';
import { ConfirmPasswordValidator } from './ConfirmPasswordValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  newUser: User;

  constructor(public authService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        userName: ['', [Validators.minLength(2), Validators.maxLength(30)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      },
      { validator: ConfirmPasswordValidator.MatchPassword }
    );
  }

  get email() {
    return this.registerForm.get('email');
  }
  get userName() {
    return this.registerForm.get('userName');
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
      this.userName.hasError('minlength') ||
      this.userName.hasError('maxlength') ||
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
      return 'This field is required';
    } else if (validator.hasError('email')) {
      return 'Your email doesn\'t look quite right...';
    } else if (validator.hasError('minlength')) {
      return 'You have not met the Minimum Length';
    } else if (validator.hasError('maxlength')) {
      return 'You have passed the Maximum Length';
    } else if (validator.hasError('confirmPassword')) {
      return 'Passwords must match';
    } else {
      return '';
    }
  }
}
