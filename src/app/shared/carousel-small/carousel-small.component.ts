import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-small',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-small.component.html',
  styleUrl: './carousel-small.component.css'
})
export class CarouselSmallComponent {
  @Input() slides:string[]=[];
  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1;
  }
}
