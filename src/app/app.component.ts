import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  isCool: boolean;
  isStylisz: boolean;
}
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

  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Mike',
      type: 'electric',
      isCool: false,
      isStylisz: false,
    },
    {
      id: 2,
      name: 'Frank',
      type: 'fire',
      isCool: false,
      isStylisz: false,
    },
    {
      id: 3,
      name: 'Garfield',
      type: 'garfield',
      isCool: true,
      isStylisz: true,
    },
  ];
  constructor() {}

  handleClick(value: any) {
    console.log(value);
  }
}