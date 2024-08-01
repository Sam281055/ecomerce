import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { SeccionComponent } from '../../shared/seccion/seccion.component';
import { opciones } from '../../interface/opcion.interface';
import { producto } from '../../interface/producto.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, SeccionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  slidePrincipal = [
      'https://png.pngtree.com/template/20220419/ourmid/pngtree-user-with-computer-banner-digital-image_1287037.jpg',
      'https://png.pngtree.com/template/20220421/ourmid/pngtree-stock-trading-banner-market-prognosis-image_1312607.jpg',
      'https://png.pngtree.com/template/20220505/ourmid/pngtree-programming-and-coding-banner-working-image_1312497.jpg',
      'https://png.pngtree.com/template/20220421/ourmid/pngtree-podcast-courses-banner-audio-video-image_1313262.jpg'
  ];  
  slideSecundario=[
    "https://www.cliftoncameras.co.uk/uploads/Shop%20Page/Canon/r3-banner.jpg",
    "https://i1.adis.ws/i/canon/eos-r6-mark-ii-kv-static-16x9-lens_51e3758d805a4fc3b2395a3fb9eb24ee?$media-collection-full-dt-jpg$",
    "https://asia.canon/media/image/2022/11/04/cfb106802dc54d11bef69340ef633acf_EOSRSystem2022-banner_1920x750.jpg"
  ];
  opcionSeccionFilmacion:opciones[]=[
    {nombre:"Sony",       link:""},
    {nombre:"Canon",      link:""},
    {nombre:"Nikon",      link:""},
    {nombre:"Accesorios", link:""},
  ];
  productosNuevos:producto[]=[
    {name:"Canon EOS R3", 
      categoria:1, 
      picture:"https://ph.canon/media/image/2021/09/11/bdaf922bd68e4dec944ce6491a425cb0_R3_Front_wlens.png", 
      amount:10, id:1, price:7000000, recomendado: 1 },
      {name:"Canon EOS R3", 
        categoria:1, 
        picture:"https://ph.canon/media/image/2021/09/11/bdaf922bd68e4dec944ce6491a425cb0_R3_Front_wlens.png", 
        amount:11, id:1, price:7000000, recomendado: 1 }, {name:"Canon EOS R3", 
          categoria:1, 
          picture:"https://ph.canon/media/image/2021/09/11/bdaf922bd68e4dec944ce6491a425cb0_R3_Front_wlens.png", 
          amount:11, id:1, price:7000000, recomendado: 1 }, {name:"Canon EOS R3", 
            categoria:1, 
            picture:"https://ph.canon/media/image/2021/09/11/bdaf922bd68e4dec944ce6491a425cb0_R3_Front_wlens.png", 
            amount:11, id:1, price:7000000, recomendado: 1 }, {name:"Canon EOS R3", 
              categoria:1, 
              picture:"https://ph.canon/media/image/2021/09/11/bdaf922bd68e4dec944ce6491a425cb0_R3_Front_wlens.png", 
              amount:11, id:1, price:7000000, recomendado: 1 }, {name:"Canon EOS R3", 
                categoria:1, 
                picture:"https://ph.canon/media/image/2021/09/11/bdaf922bd68e4dec944ce6491a425cb0_R3_Front_wlens.png", 
                amount:11, id:1, price:7000000, recomendado: 1 },
  ]


  constructor(
  ) {
  }

  ngOnInit(){
    
    // this.Listar();
  }

}
