import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'main';
  constructor(
    private languageService: LanguageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.languageService.setInitialAppLanguage();
    this.setDirection();
  }

  setDirection() {
    debugger;
    const currentLang = this.languageService.getCurrentLanguage();
    if (currentLang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.body.classList.remove('ltr');
      document.body.classList.add('rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.body.classList.remove('rtl');
      document.body.classList.add('ltr');
    }
  }
}
