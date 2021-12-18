import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '@shared/services/products-services/product.service';
import { ServiceService } from '@shared/services/services-service/service.service';

@Component({
  selector: 'app-page-model',
  templateUrl: './page-model.component.html',
  styleUrls: ['./page-model.component.css']
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
