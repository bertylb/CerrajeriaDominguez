import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
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

  // GOOGLEMAP CONTIENE LA ETIQUETA IFRAME DE LA UBICACION
  @ViewChild('googleMap') googleMap!: ElementRef;
  linkAddress: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6768.760662637175!2d-60.92736368484473!3d-31.97770377363809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5bf8a8aeb20f9%3A0x390f5462ae13c2e8!2sCerrajeria%20Dominguez!5e0!3m2!1ses-419!2sar!4v1639193209399!5m2!1ses-419!2sar';
  showMap: boolean = true;

  constructor(public productService: ProductService, public servicesService: ServiceService) {
                this.homeProductImage = productService.productImages;
                this.homeServicesImage = servicesService.servicesImages;
   }

  ngOnInit(): void {

    setTimeout(() => {
      let srcMap = this.googleMap.nativeElement.src;
      if(srcMap!=this.linkAddress){
        this.showMap=false;
      }
    }, 2000);

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