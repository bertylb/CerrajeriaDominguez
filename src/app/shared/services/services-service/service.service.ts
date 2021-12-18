import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  servicesImages: Array<any> = [];

  constructor() {
    this.servicesImages = [
      {
        url: '../../../../assets/img/servicios/servicios-img.jpeg'
      },
      {
        url: '../../../../assets/img/servicios/servicios-img2.jpeg'
      },
      {
        url: '../../../../assets/img/servicios/servicios-img3.jpeg'
      },
      {
        url: '../../../../assets/img/servicios/servicios-img4.jpeg'
      },
      {
        url: '../../../../assets/img/products/product-img5.jpeg'
      },
      {
        url: '../../../../assets/img/body-bg1.jpg'
      },
      {
        url: '../../../../assets/img/body-bg2.jpg'
      },
      {
        url: '../../../../assets/img/body-bg4.jpg'
      }
    ];
  }
}
