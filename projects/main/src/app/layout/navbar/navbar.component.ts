import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public languageService: LanguageService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {}

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

  changeLang(lang: string) {
    debugger;
    this.languageService.changeLanguage(lang);
    this.setDirection();
  }

  onSelect(lang: any) {
    console.log(lang.target.value);

    this.changeLang(lang.target.value);
  }
  openCart() {
    const cartDialog = document.querySelector('.cart-drop');

    cartDialog?.classList.toggle('active');
  }
}
