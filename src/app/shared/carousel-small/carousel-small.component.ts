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
    '/section 1/BANNER-SECCION-LEXAR-2000ES-min.jpg',
    '/section 1/s_canon_eosr8.webp',
    '/section 1/s_sony_zve1.webp',
    '/section 1/Sandisk_Extreme_Pro_ES-min.jpg'
  ];

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1;
  }
}
