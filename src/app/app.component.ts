import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  /**
   *
   *
   */

 
  constructor() {}

  handleClick(value: any) {
    console.log(value);
  }
}
