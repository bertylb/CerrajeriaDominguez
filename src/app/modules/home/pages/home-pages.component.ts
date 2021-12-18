import { Component, OnInit } from '@angular/core';
import { ProductService } from '@shared/services/products-services/product.service';
import { ServiceService } from '@shared/services/services-service/service.service';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent implements OnInit {

  homeProductImage: Array<any> = [];
  homeServicesImage: Array<any> = [];

  constructor(public productService: ProductService,
              public servicesService: ServiceService) {
    this.homeProductImage = productService.productImages;
    this.homeServicesImage = servicesService.servicesImages;
   }

  ngOnInit(): void {
  }

  productsImages() {
    // SOLO LAS PRIMERAS 4 IMAGENES PARA MOSTRAR EN LA VISTA
    let newProductImages = this.homeProductImage.slice(0,4);
    return newProductImages;
  }
  serviceImages() {
    // SOLO LAS PRIMERAS 4 IMAGENES PARA MOSTRAR EN LA VISTA
    let newServiceImages = this.homeServicesImage.slice(0,4);
    return newServiceImages;
  }
}