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
    this.scrollToTopAction();
  }

  getHeaderHight() {
    const headerHeight = document
      .querySelector('.header')
      .getBoundingClientRect().height;

    return headerHeight;
  }

  scrollToTopAction() {
    const scrollBtn = document.querySelector('.backtotop');
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
    scrollBtn.classList.add('hide');
    const headerHeight = this.getHeaderHight();

    window.addEventListener('scroll', function () {
      if (this.scrollY >= headerHeight - 55) scrollBtn.classList.remove('hide');
      else scrollBtn.classList.add('hide');
    });
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
