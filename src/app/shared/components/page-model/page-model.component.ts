import { Component, Input, OnInit } from '@angular/core';
import { trigger, style, state, animate, transition } from '@angular/animations';

import { ProductService } from '@shared/services/products-services/product.service';
import { ServiceService } from '@shared/services/services-service/service.service';

@Component({
  selector: 'app-page-model',
  templateUrl: './page-model.component.html',
  styleUrls: ['./page-model.component.css'],
  animations: [
    trigger('mainTitle', [
      state('void', style({
        transform: 'translateY(-100px)',
        opacity: 0
      })),
      transition(':enter', [
        animate('300ms', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('mainParagraph', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('600ms', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class PageModelComponent implements OnInit {

  @Input() title: 'productos' | 'servicios' | 'contacto' = 'productos';
  public paragraph: string = '';
  imagesList: Array<any> = [];

  constructor(public productService: ProductService,
              public serviceServices: ServiceService) {
  }

  ngOnInit(): void {
    this.selectedSection();
  }

  selectedSection() {
    switch(this.title){
      case 'productos': this.imagesList = this.productService.productImages;
                        this.paragraph = 'En nuestro local podes encontrar todo tipo de llaves, candados, contamos con una amplia gama de marcas,\
                        tenemos máquinas de última tecnología que nos permiten realizar llaves duplicados en el acto!'
      break;
      case 'servicios': this.imagesList = this.serviceServices.servicesImages;
                        this.paragraph = 'pagina de servicios --- texto aqui'
      break;
    }
  }
}
