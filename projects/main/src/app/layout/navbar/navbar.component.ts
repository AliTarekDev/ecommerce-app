import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public languageService: LanguageService,
    private _router: Router
  ) {}
  selectedLang: string = 'en';
  ngOnInit(): void {}

  setDirection() {
    // const currentLang = this.languageService.getCurrentLanguage();

    const selectedLang = this.selectedLang;

    if (selectedLang === 'ar') {
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
    this.selectedLang = lang;
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

  // showList() {
  //   const list = document.querySelector('.shop-categories');
  //   list.classList.toggle('');
  // }

  // navigateToPage() {
  //   this._router.navigate([`${this.selectedLang}`, '/product/product-list']);
  // }
}
