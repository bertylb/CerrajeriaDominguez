import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '@shared/services/products-services/product.service';

@Component({
  selector: 'app-page-model',
  templateUrl: './page-model.component.html',
  styleUrls: ['./page-model.component.css']
})
export class PageModelComponent implements OnInit {

  @Input() title: string = '';
  @Input() section: 'productos' | 'servicios' = 'productos';
  public paragraph: string = '';
  productPageImages: Array<any> = [];

  constructor(public  productService: ProductService ) {
  }

  ngOnInit(): void {
    this.selectedSection();
    }

  selectedSection() {
    switch(this.section){
      case 'productos': this.productPageImages = this.productService.productImages;
                        this.paragraph = 'En nuestro local podes encontrar todo tipo de llaves, candados, contamos con una amplia gama de marcas,\
                        tenemos máquinas de última tecnología que nos permiten realizar llaves duplicados en el acto!'
      break;
      case 'servicios': this.productPageImages = [];
                        this.paragraph = 'pagina de servicios --- texto aqui'
      break;
    }
  }
}
