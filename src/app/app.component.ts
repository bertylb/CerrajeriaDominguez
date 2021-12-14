import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cerrajeria-dominguez';

  scrollTop() {
    window.scroll(0,0); //(top=0,left=0)
  }
}
