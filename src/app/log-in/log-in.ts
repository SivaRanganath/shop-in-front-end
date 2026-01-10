import { AfterViewInit, Component, Injector, linkedSignal, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import validator from 'validator';
import { LoginService } from './login-service';
import { AppComponentBase } from '../app-component-base';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: false,
  templateUrl: './log-in.html',
  styleUrl: './log-in.scss',
})
export class LogIn extends AppComponentBase implements AfterViewInit {
  isFormSubmitted: boolean = false
  userSignupForm: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              injector: Injector,
              private router: Router
  ) {
    super(injector);
    this.initializeFormBuilder();
  }

  ngAfterViewInit() {
  }

  initializeFormBuilder() {
    this.userSignupForm = this.fb.group({
      userName: this.fb.control('', [Validators.required, Validators.minLength(1)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, this.customValidator]),
      reenterPassword: this.fb.control('', [Validators.required])
    },
      {
        validators: this.passwordMatchValidator
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

  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('reenterPassword')?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    return password === confirmPassword
      ? null
      : { passwordMismatch: true };
  }

  onFormSubmit(event: Event) {
    event?.stopPropagation();
    event?.preventDefault();
    this.isFormSubmitted = true;
    if (this.userSignupForm.valid) {
      this.spinnerService.show();
      this.loginService.signUpUser(this.userSignupForm.value)
     .subscribe({
      next: (res) => {
      this.spinnerService.hide();
      this.notify.success("Account Created Successfully!!");
      this.router.navigate(['/login'])
      },
      error: (err) => {
      this.spinnerService.hide();
      this.notify.error(err.message);
      }
     });
    } else {
      this.notify.warning("Required Fields Missing");
    }
  }
}
