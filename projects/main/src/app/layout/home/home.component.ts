import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private _router: ActivatedRoute,
    private _languageService: LanguageService
  ) {}
  ngOnInit(): void {}
}
