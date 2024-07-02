import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{

  @Input() slides:string[]=[];
  currentSlide = 0;
  // slides = [
  //   'https://via.placeholder.com/800x400?text=Slide+1',
  //   'https://via.placeholder.com/800x400?text=Slide+2',
  //   'https://via.placeholder.com/800x400?text=Slide+3'
  // ];
  
  ngOnInit(): void {
    
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1;
  }
}
