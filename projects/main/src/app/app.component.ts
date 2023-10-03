import { Component, ElementRef, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { NavigationEnd, Router } from '@angular/router';
import AOS from 'aos';

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

  hideScrollBtn = false;
  ngOnInit(): void {
    this.languageService.setInitialAppLanguage();
    this.setDirection();
    this.scrollToTopAction();

    this._router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    AOS.init();
  }

  setDirection() {
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

  scrollToTopAction() {
    debugger;
    const scrollBtn = document.querySelector('.backtotop');
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
    scrollBtn.classList.add('hide');
    //const headerHeight = this.getHeaderHight();

    window.addEventListener('scroll', function () {
      if (this.scrollY >= 500) scrollBtn.classList.remove('hide');
      else scrollBtn.classList.add('hide');
    });
  }
}
