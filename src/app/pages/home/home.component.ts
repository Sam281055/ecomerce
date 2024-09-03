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
export class HomeComponent implements OnInit {

  slidePrincipal = [
    // '/home_banner/black-and-decker.webp',
    '/home_banner/game-zone.webp',
    '/home_banner/realme-12x.webp',
    '/home_banner/BANNER KIESLECT.png',
  ];

  opcion: opciones[] = [
    { nombre: "Sony", link: "" },
    { nombre: "Canon", link: "" },
    { nombre: "Nikon", link: "" },
    { nombre: "Accesorios", link: "" },
  ];

  camera_producRec:producto[]=[
    {nombre: "Cámara IP 4Life Outdoor FL-188 2.5K Wifi", 
      unidades:4, precio:"400$", 
      imagen:"/camera/Cámara IP 4Life Outdoor FL-188 2.5K Wifi.jpg"},

    {nombre: "Hikvision Domo DS-2CD1143G2-LIU 4MP Smart Hybrid Light", 
      unidades:2, precio:"350$", 
      imagen:"/camera/Hikvision Domo DS-2CD1143G2-LIU 4MP Smart Hybrid Light.jpg"},

    {nombre: "Xiaomi BW500 BHR8303GL 2.5K Wifi", 
      unidades:4, precio:"500$", 
      imagen:"/camera/Xiaomi BW500 BHR8303GL 2.5K Wifi.jpg"},

    {nombre: "Xiaomi Mi Outdoor BW300 MJSXJ08BY 2K Wifi", 
      unidades:4, precio:"450$", 
      imagen:"/camera/Xiaomi Mi Outdoor BW300 MJSXJ08BY 2K Wifi.jpg"},
  ]

  camera_producNew:producto[]=[
    {nombre: "Estabilizador Zhiyun Weebill-S Para Cámaras Réflex + Soporte Para Celular Pro Package", 
      unidades:4, precio:"200$", 
      imagen:"/camera/Estabilizador Zhiyun Weebill-S Para Cámaras Réflex + Soporte Para Celular Pro Package.jpg"},

    {nombre: "Amortiguador De Vibraciones Insta360", 
      unidades:2, precio:"90$", 
      imagen:"/camera/Amortiguador De Vibraciones Insta360.jpg"},

    {nombre: "Kit De Montura Giratorio SmallRig 4306 Para Cámaras Nikon De La Serie Z", 
      unidades:4, precio:"130$", 
      imagen:"/camera/Kit De Montura Giratorio SmallRig 4306 Para Cámaras Nikon De La Serie Z.jpg"},

    {nombre: "Cámara Nikon Z Fc", 
      unidades:4, precio:"450$", 
      imagen:"/camera/Cámara Nikon Z Fc.jpg"},
  ]

  constructor(
  ) {
  }

  ngOnInit() {

    // this.Listar();
  }

}
