import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'projects/main/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    public _translate: TranslateService,
    private _authService: AuthService
  ) {}

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    passwordConfirmation: new FormControl(''),
    phone: new FormControl(''),
  });

  ngOnInit(): void {}

  register() {
    console.log(this.registerForm.value);

    this._authService.register(this.registerForm.value).subscribe((user) => {});
  }
}
