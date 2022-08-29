import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {


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


  constructor() { }

  handleRemove(event: Pokemon){
    this.pokemons = this.pokemons.filter((pokemons: Pokemon) => {
      return pokemons.id !== event.id;
    }) 
  }

  ngOnInit(): void {
  }

}
