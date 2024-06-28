import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, NavbarComponent, FooterComponent, ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations:[
    trigger('fadeIn',[
      state('void',style({
        opacity:0
      })),
      transition('void=> *',[
        animate('200ms ease-in'),
      ]),
      transition('* => void',[
        animate('350ms ease-out')
      ])
    ])
      
  //   Entering: "transition ease-out duration-100"
  //   From: "transform opacity-0 scale-95"
  //   To: "transform opacity-100 scale-100"
  // Leaving: "transition ease-in duration-75"
  //   From: "transform opacity-100 scale-100"
  //   To: "transform opacity-0 scale-95"
  ]
})
export class AppComponent {
  profileMenu=false;
  title = 'ASP-CRUD';
  onProfileMenu(){
    this.profileMenu=!this.profileMenu;
  }
}
