import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    this._authService
      .login(this.loginForm.value)
      .pipe(
        tap(() => {
          this._router.navigate(['/']);
        })
      )
      .subscribe();
  }
}
