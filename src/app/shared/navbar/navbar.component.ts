import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  logoSrc: string = '/Logo.png';
  categoria:boolean=false;
  isMenuSmall:boolean=false;
  constructor(
  ) {}

  onMouseOverLogo() {
    this.logoSrc = '/Logo2.png';
  }

  onMouseOutLogo() {
    this.logoSrc = '/Logo.png';
  }
  onCategoria() {
    this.categoria=!this.categoria;
  }
  onMenuSmall(){
    this.isMenuSmall=!this.isMenuSmall;
  }
}
