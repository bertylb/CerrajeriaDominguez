import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public mainMenu: Array<any> = [];
  public itemActivo: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.mainMenu = [
      {
        link: 'inicio',
        route: ['/']
      },
      {
        link: 'productos',
        route: ['/', 'products']
      },
      {
        link: 'servicios',
        route: ['/', 'services']
      },
      {
        link: 'contacto',
        route: ['/', 'contact']
      }
    ]
  }

  changeActive(item:any) {
    this.itemActivo = !this.itemActivo;
    console.log(this.itemActivo, "item", item );
  }

}
