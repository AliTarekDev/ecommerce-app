import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'projects/main/services/product.service';
import { Category } from '../../modules/product/interfaces/category';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public name = './assets/company_profile.pdf';
  constructor(
    public languageService: LanguageService,
    @Inject(DOCUMENT) private document: Document,
    public translate: TranslateService,
    private _productService: ProductService
  ) {}
  selectedLang: string = 'en';
  categories: Observable<Category[]>;
  ngOnInit(): void {
    this.getCategories();
    /******* Close The dropDown if i click on the window */
    window.onclick = function (e: any) {
      const dropDown = document.querySelector('.dropdown-menu');
      if (
        dropDown.classList.contains('show') &&
        !e.target.classList.contains('nav-link')
      ) {
        dropDown.classList.remove('show');
      }
    };
  }

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

    let htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.languageService.changeLanguage(lang);

    this.translate.use(lang);
    this.changeCssFile(lang);

    this.setDirection();
  }

  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName(
      'head'
    )[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById(
      'mainLang'
    ) as HTMLLinkElement;
    // const urlLang = window.location.pathname.split('/')[1];
    // let bundleName = lang === 'ar' ? 'arabicStyle.css' : 'englishStyle.css';
    let tag = headTag.querySelector('#mainLang');

    if (existingLink) {
      // existingLink.href = bundleName;
      tag.setAttribute('href', 'assets/style-ar.css');
    } else {
      tag.setAttribute('href', 'assets/style-en.css');
    }
  }

  onSelect(lang: any) {
    this.changeLang(lang.target.value);
  }
  openCart() {
    // const cartDialog = document.querySelector('.cart-drop');
    // cartDialog?.classList.toggle('active');
  }

  downloadMarvelPdf() {
    window.open('./assets/company_profile.pdf', '_blank');
  }

  getCategories() {
    this.categories = this._productService
      .getAllCategories()
      .pipe(map((res) => res.products.data));
  }
}
