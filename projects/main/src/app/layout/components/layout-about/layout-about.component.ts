import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout-about',
  templateUrl: './layout-about.component.html',
  styleUrls: ['./layout-about.component.scss'],
})
export class LayoutAboutComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
