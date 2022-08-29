import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor() { }

getPokemons(): Pokemon[]
{
  return [ 
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
    }
  ];
}

}
