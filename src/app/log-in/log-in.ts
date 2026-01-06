import { AfterViewInit, Component, linkedSignal, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import validator from 'validator';

@Component({
  selector: 'app-log-in',
  standalone: false,
  templateUrl: './log-in.html',
  styleUrl: './log-in.scss',
})
export class LogIn implements AfterViewInit {
  userSignupForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {
    this.initializeFormBuilder();
  }

  ngAfterViewInit() {
  }

  initializeFormBuilder() {
    this.userSignupForm = this.fb.group({
      userName: this.fb.control('', [Validators.required, Validators.minLength(1)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required ,this.customValidator]),
    })
  }

  customValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
      return null;
    }

    const isStrong = validator.isStrongPassword(value);

    return isStrong ? null : { weakPassword: true };
  }
}


interface dataItem {
  id: number;
  field: string;
}