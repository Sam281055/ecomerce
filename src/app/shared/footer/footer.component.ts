import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  Electrodomesticos: opciones[] = [
    { nombre: "Televisores",             link: "" },
    {nombre: "Dispositivos de Streaming",link: "" },
    { nombre: "Aspiradoras",             link: "" },
    { nombre: "Aspiradoras Inteligentes",link: "" },
    { nombre: "Secadores de pelo",       link: "" },
    { nombre: "Afeitadoras",             link: "" },
    { nombre: "Baby Call",               link: "" }
  ];
  Oficina: opciones[] = [
    { nombre: "Impresoras",              link: "" },
    { nombre: "Tonners y Cartuchos",     link: "" },
    { nombre: "Proyectores",             link: "" },
    { nombre: "Scanners",                link: "" },
    { nombre: "Calculadoras",            link: "" },
    { nombre: "Teléfonos inhalámbricos", link: "" },
    { nombre: "Pilas AA y AAA",          link: "" }
  ];
  Automovil :opciones[] = [
    { nombre: "Gps y Navegación",        link: ""},
    { nombre: "Autorradios",             link: ""},
    { nombre: "Parlantes",               link: ""},
    { nombre: "Amplificadores",          link: ""},
    { nombre: "Cargadores USB para Auto",link: ""},
    { nombre: "Cámaras para Auto",       link: ""}
  ];
  Perfumes  :opciones[] = [
    { nombre: "Carolina Herrera",        link: ""},
    { nombre: "Paco Rabanne",            link: ""},
    { nombre: "Calvin Klein",            link: ""},
    { nombre: "Hugo Boss",               link: ""},
    { nombre: "Chanel",                  link: ""},
    { nombre: "Ralph Lauren",            link: ""},
    { nombre: "Christian DIor",          link: ""}
  ];
  Accesorios:opciones[] = [
    { nombre: "Procesadores",            link: ""},
    { nombre: "Fuentes de alimentación", link: ""},
    { nombre: "Placas Madres",           link: ""},
    { nombre: "Memoria RAM",             link: ""},
    { nombre: "Discos de estado sólido", link: ""},
    { nombre: "Placas de Video",         link: ""},
    { nombre: "Gabinetes",               link: ""},
    { nombre: "Teclados",                link: ""},
    { nombre: "Mouses",                  link: ""}
  ];
  Atc:opciones[]=[
    { nombre: "Cómo comprar",            link:""},
    { nombre:"Plazos de Garantia",link:""},
    { nombre: "Términos y condiciones",  link:""},
    { nombre: "Politicas de Privacidad", link:""},
    { nombre: "Preguntas frecuentes",    link:""}
  ];
  Empresa:opciones[]=[
    { nombre: "¿Quiénes somos?",         link:""},
    { nombre: "¿Dónde estamos?",         link:""},
    { nombre: "lockers",                 link:""},
    { nombre: "Trabaja con nosotros",    link:""}
  ];
  Marcas:opciones[]=[
    { nombre: "Apple",                   link:""},
    { nombre: "Intel",                   link:""},
    { nombre: "Samsung",                 link:""},
    { nombre: "Sony",                    link:""},
  ];
}
export interface opciones {
  nombre: string,
  link: string
}