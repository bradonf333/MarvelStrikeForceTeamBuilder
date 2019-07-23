import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  registerForm: FormGroup;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ])
    });
  }

  tryRegister(value) {
    this.authService.register(value).then(
      res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      }
    );
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  /** If any validation Errors then Disable the Submit Button */
  disableButton() {
    if (
      this.email.hasError('required') ||
      this.email.hasError('minLength') ||
      this.email.hasError('maxLength') ||
      this.password.hasError('required') ||
      this.password.hasError('minLength') ||
      this.password.hasError('maxLength')
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
    } else if (validator.hasError('maxlength')) {
      return 'You have exceeded the Max Length';
    } else if (validator.hasError('minLength') || validator.hasError('minLength')) {
      return 'You have not met the Minimum Length';
    } else {
      return '';
    }
  }
}
