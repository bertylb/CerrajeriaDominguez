import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public mainMenu: Array<any> = [];

  @ViewChild('sidenav') sidenav!: MatSidenav;
  icon: 'menu' | 'close' = 'menu';

  constructor() { }

  ngOnInit(): void {
    this.addLinks();
  }

  addLinks() {
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
  // AL PRESIONAR TECLA ESC
  close() {
    this.sidenav.close();
  }
  changeIcon() {
    if(this.sidenav.opened) {
      this.icon = 'close'
    } else {
      this.icon = 'menu'
    }
  }
}
