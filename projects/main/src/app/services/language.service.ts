import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translateService: TranslateService) {}

  setInitialAppLanguage() {
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
  }

  getLanguageFromUrl(): string {
    const urlLang = window.location.pathname.split('/')[1];
    const supportedLanguages = ['en', 'ar'];
    return supportedLanguages.includes(urlLang) ? urlLang : '';
  }

  getCurrentLanguage() {
    return this.translateService.currentLang;
  }
}
