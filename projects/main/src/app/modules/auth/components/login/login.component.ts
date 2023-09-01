import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'projects/main/services/auth.service';
import { LanguageService } from 'projects/main/src/app/services/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    public _translate: TranslateService,
    private _authService: AuthService
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  loginUser() {
    this._authService.login(this.loginForm.value).subscribe();
  }
}
