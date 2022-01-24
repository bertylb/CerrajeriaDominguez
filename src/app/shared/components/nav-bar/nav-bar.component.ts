import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  destroyed = new Subject<void>();
  private currentScreenSize: string = '';
  public mainMenu: Array<any> = [];
  public icon: 'menu' | 'close' = 'menu';
  public show: boolean = true;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(public breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          if(this.currentScreenSize ==='Small' || this.currentScreenSize === 'XSmall'){
            this.show = false;
            this.icon = 'menu'
          }else{
            this.show = true;
          }
        }
      }
    });
  }

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
  changeIcon() {
    this.sidenav.opened ? this.icon = 'close' : this.icon = 'menu';
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}

