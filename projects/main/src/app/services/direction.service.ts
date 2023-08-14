import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DirectionService {
  private direction = new BehaviorSubject('ltr');
  currentDirection = this.direction.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateDirection();
      }
    });
  }

  updateDirection() {
    const url = this.router.url;

    if (url === '/ar') {
      this.direction.next('ltr');
    } else if (url === '/en') {
      this.direction.next('ltr');
    }
  }
}
