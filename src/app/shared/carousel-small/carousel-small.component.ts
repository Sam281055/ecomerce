import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-small',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-small.component.html',
  styleUrl: './carousel-small.component.css'
})
export class CarouselSmallComponent {
  currentSlide = 0;
  slides = [
    'https://via.placeholder.com/800x200?text=Slide+1',
    'https://via.placeholder.com/800x200?text=Slide+2',
    'https://via.placeholder.com/800x200?text=Slide+3'
  ];

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1;
  }
}
