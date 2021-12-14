import { Component, OnInit } from '@angular/core';
import { ProductService } from '@shared/services/products-services/product.service';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent implements OnInit {

  homeProductImage: Array<any> = [];

  constructor(public productService: ProductService) {
    this.homeProductImage = productService.productImages;
   }

  ngOnInit(): void {
  }

  productsImages() {
    // SOLO LAS PRIMERAS 4 IMAGENES PARA MOSTRAR EN LA VISTA
    let newProductImages = this.homeProductImage.slice(0,4);
    return newProductImages;
  }
}