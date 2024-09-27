import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productosdetalles',
  standalone: true,
  imports: [],
  templateUrl: './productosdetalles.component.html',
  styleUrl: './productosdetalles.component.css',
})
export class ProductosdetallesComponent {
  ruta = inject(ActivatedRoute);
  prod:any
  ngOnInit(){

    let id;
    this.ruta.paramMap.subscribe((parametro) => {
      id = parametro.get('id');
      this.productos.forEach((pdr) => {
        if (pdr.id.toString() == parametro.get('id')) {
          console.log(pdr);
          this.prod = pdr;
        }
      });
    });


  }
  productos = [
    {
      id: 1,
      nombre: 'Portátil ASUS ZenBook 14',
      categoria: 'Ordenadores Portátiles',
      precio: 1099.99,
      stock: 25,
      caracteristicas: {
        procesador: 'Intel Core i7',
        memoria_RAM: '16GB',
        almacenamiento: '512GB SSD',
        pantalla: '14 pulgadas Full HD',
        sistema_operativo: 'Windows 11',
      },
    },
    {
      id: 2,
      nombre: 'Smartphone Samsung Galaxy S22',
      categoria: 'Teléfonos Móviles',
      precio: 899.99,
      stock: 50,
      caracteristicas: {
        pantalla: '6.1 pulgadas AMOLED',
        procesador: 'Exynos 2200',
        almacenamiento: '128GB',
        camara: 'Triple cámara de 50MP',
        bateria: '3700mAh',
      },
    },
    {
      id: 3,
      nombre: 'Smart TV LG OLED55C1',
      categoria: 'Televisores',
      precio: 1499.99,
      stock: 15,
      caracteristicas: {
        pantalla: '55 pulgadas OLED',
        resolucion: '4K UHD',
        sistema_operativo: 'webOS',
        puertos: '4 HDMI, 3 USB',
        smart_TV: true,
      },
    },
    {
      id: 4,
      nombre: 'Auriculares Bose QuietComfort 45',
      categoria: 'Auriculares',
      precio: 329.99,
      stock: 40,
      caracteristicas: {
        tipo: 'Inalámbricos',
        conectividad: 'Bluetooth 5.1',
        cancelacion_ruido: true,
        autonomia: '24 horas',
        peso: '240g',
      },
    },
    {
      id: 5,
      nombre: 'Reloj Inteligente Apple Watch Series 8',
      categoria: 'Relojes Inteligentes',
      precio: 459.99,
      stock: 30,
      caracteristicas: {
        pantalla: '1.9 pulgadas OLED',
        conectividad: 'Wi-Fi, Bluetooth 5.0',
        sensor_salud: true,
        resistente_agua: '50 metros',
        compatibilidad: 'iOS',
      },
    },
    {
      id: 6,
      nombre: 'Tablet Apple iPad Pro 11',
      categoria: 'Tablets',
      precio: 1199.99,
      stock: 20,
      caracteristicas: {
        pantalla: '11 pulgadas Liquid Retina',
        procesador: 'Apple M2',
        almacenamiento: '256GB',
        camara: 'Cámara dual de 12MP',
        bateria: 'Hasta 10 horas',
      },
    },
    {
      id: 7,
      nombre: 'Monitor Dell UltraSharp 27',
      categoria: 'Monitores',
      precio: 749.99,
      stock: 18,
      caracteristicas: {
        pantalla: '27 pulgadas IPS',
        resolucion: '4K UHD',
        frecuencia_refresco: '60Hz',
        conectividad: 'HDMI, USB-C',
        ajuste_ergonomico: true,
      },
    },
    {
      id: 8,
      nombre: 'Cámara Sony Alpha A7 III',
      categoria: 'Cámaras',
      precio: 1999.99,
      stock: 10,
      caracteristicas: {
        sensor: 'Full Frame 24.2MP',
        video: '4K UHD',
        lentes: 'Intercambiables',
        estabilizacion: '5 ejes',
        autofoco: '693 puntos AF',
      },
    },
    {
      id: 9,
      nombre: 'Consola PlayStation 5',
      categoria: 'Consolas',
      precio: 499.99,
      stock: 35,
      caracteristicas: {
        almacenamiento: '825GB SSD',
        resolucion_maxima: '8K',
        frecuencia_refresco: '120Hz',
        conectividad: 'Wi-Fi, Bluetooth 5.1',
        compatibilidad_juegos: 'PS4 y PS5',
      },
    },
    {
      id: 10,
      nombre: 'Router Asus RT-AX88U',
      categoria: 'Redes',
      precio: 329.99,
      stock: 45,
      caracteristicas: {
        tecnologia: 'Wi-Fi 6',
        velocidad_maxima: '6000 Mbps',
        puertos: '8 LAN Gigabit',
        seguridad: 'WPA3, VPN',
        control_parental: true,
      },
    },
  ];
}
