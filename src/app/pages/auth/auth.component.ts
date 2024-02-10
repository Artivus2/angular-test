import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserRresponse } from './user.interface';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authService = inject(AuthService)
  fb = inject(FormBuilder)
  router = inject(Router)

  form = this.fb.nonNullable.group({
    username: ['kminchelle', Validators.required],
    password: ['0lelplR', Validators.required]
  })



  login() {
    if (!this.form.valid) return
    this.authService.login(this.form.getRawValue()).subscribe({
      next: (response: UserRresponse) => {
        console.log(response);
        if (response.token) {
          this.authService.setToken(response.token)
          this.authService.setCurrentUser(response)
          this.router.navigateByUrl('/')
        }
      },
      error: (error: any) => {
        this.authService.setToken('')
        this.authService.setCurrentUser(null)
      },
    })
  }
}
