import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.indicatorStyle();
    this.slideShow();
  }

  slideShow() {}

  indicatorStyle() {
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const indicatorChilds = document.querySelectorAll(
      '.carousel-indicators button'
    );

    indicatorsContainer.addEventListener('click', function (e) {
      let el = e.target as Element;

      console.log(el);

      if (el.classList.contains('indicator')) {
        Array.from(indicatorChilds).forEach((ele) => {
          ele.classList.remove('active');
        });

        el.classList.add('active');
      }
    });
  }
}
