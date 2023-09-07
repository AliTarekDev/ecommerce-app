import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    private translateService: TranslateService,
    private _router: Router
  ) {}

  setInitialAppLanguage() {
    debugger;
    let language = this.getLanguageFromUrl();
    if (language) {
      this.translateService.use(language);
    } else {
      // Default language
      this.translateService.use('en');
    }
  }

  changeLanguage(language: string) {
    this.translateService.use(language);
    const currentUrl = this._router.url.substring(4);
    this._router.navigate([`/${language}/${currentUrl}`]);
  }

  getLanguageFromUrl(): string {
    debugger;
    const urlLang = window.location.pathname.split('/')[1];
    const supportedLanguages = ['en', 'ar'];

    return supportedLanguages.includes(urlLang) ? urlLang : '';
  }

  getCurrentLanguage() {
    return this.translateService.currentLang;
  }
}
