import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    this.indicatorStyle();
    this.getHeaderHight();
  }

  getHeaderHight() {
    const headerHeight = document
      .querySelector('.header')
      .getBoundingClientRect().height;

    return headerHeight;
  }

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
