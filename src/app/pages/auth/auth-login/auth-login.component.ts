import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomButtonComponent } from '../../../shared/custom-button/custom-button.component';
import { CustomInputComponent } from '../../../shared/custom-input/custom-input.component';
import { CustomTitleComponent } from '../../../shared/custom-title/custom-title.component';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-auth-login',
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    CustomButtonComponent, 
    CustomInputComponent, 
    CustomTitleComponent
  ],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.css',
  standalone: true
})
export class AuthLoginComponent {
  loginForm: FormGroup;
  emailControl:FormControl;
  passwordControl:FormControl;

  constructor(
    private fb: FormBuilder, 
    private router:Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]],
    });

    this.emailControl = this.loginForm.get('email') as FormControl;
    this.passwordControl = this.loginForm.get('password') as FormControl;
  }

  submit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(res => {
        this.router.navigate(['/dashboard']);
      })
    }
  }
}
