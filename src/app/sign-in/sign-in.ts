import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../log-in/login-service';
import { AppComponentBase } from '../app-component-base';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn extends AppComponentBase {
isFormSubmitted: boolean = false
  userSignupForm: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              injector: Injector,
              private router: Router,
              private authenticationService: AuthenticationService
  ) {
    super(injector);
    this.initializeFormBuilder();
  }

  ngAfterViewInit() {
  }

  initializeFormBuilder() {
    this.userSignupForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    })
  }

  onFormSubmit(event: Event) {
    event?.stopPropagation();
    event?.preventDefault();
    this.isFormSubmitted = true;
    if (this.userSignupForm.valid) {
    this.spinnerService.show();
      this.loginService.signInUser(this.userSignupForm.value).subscribe({
        next: (res) => {
          this.authenticationService.setLoggedIn();
          this.router.navigate(['/']);
          this.spinnerService.hide();
          this.notify.success("Login Successfull");
        },
      error: (err) => {
          this.notify.error(err.message);
      this.spinnerService.hide();
        }
      })
    }
  }
}
