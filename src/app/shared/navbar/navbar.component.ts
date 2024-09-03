import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations:[
    trigger('fadeIn',[
      state('void',style({
        opacity:0
      })),
      transition('void=> *',[
        animate('300ms ease-in')
      ]),
      transition('* => void',[
        animate('300ms ease-out')
      ])
    ])
  ]
})
export class NavbarComponent {
  
  logoSrc: string = 'Logo.png';
  categoria:boolean=false;
  isMenuSmall:boolean=false;
  IsModal:boolean=false;

  constructor(
  ) {}

  onModal(){
    this.IsModal= !this.IsModal;
  }

  onMouseOverLogo() {
    this.logoSrc = 'Logo2.png';
  }

  onMouseOutLogo() {
    this.logoSrc = 'Logo.png';
  }
  onCategoria() {
    this.categoria=!this.categoria;
  }
  onMenuSmall(){
    this.isMenuSmall=!this.isMenuSmall;
  }
}
