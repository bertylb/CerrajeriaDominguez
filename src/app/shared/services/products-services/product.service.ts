import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productImages: Array<any> = [];

  constructor() {
    this.productImages = [
      {
        url: '../../../../assets/img/products/product-img.jpeg'
      },
      {
        url: '../../../../assets/img/products/product-img2.jpeg'
      },
      {
        url: '../../../../assets/img/products/product-img3.jpeg'
      },
      {
        url: '../../../../assets/img/products/product-img4.jpeg'
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
