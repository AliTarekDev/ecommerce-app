import { Directive, ElementRef, OnInit } from '@angular/core';
import { DirectionService } from '../services/direction.service';

@Directive({
  selector: '[appDirection]',
})
export class DirectionDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private directionService: DirectionService
  ) {}

  ngOnInit() {
    this.directionService.currentDirection.subscribe((direction) => {
      // this.el.nativeElement.className = direction;
      this.el.nativeElement.style.direction = direction;
    });
  }
}
