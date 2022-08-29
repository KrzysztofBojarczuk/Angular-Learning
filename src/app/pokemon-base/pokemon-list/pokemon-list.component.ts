import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {


  pokemons!: Pokemon[];
  


  constructor(private pokemonService: PokemonService) { }

  handleRemove(event: Pokemon){
    this.pokemons = this.pokemons.filter((pokemons: Pokemon) => {
      return pokemons.id !== event.id;
    }) 
  }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

}
