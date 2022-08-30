import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../pokemon-base/services/pokemon.service';

@Component({
  selector: 'app-pokemon-tempalte-form',
  templateUrl: './pokemon-tempalte-form.component.html',
  styleUrls: ['./pokemon-tempalte-form.component.css'],
})
export class PokemonTempalteFormComponent implements OnInit {
  pokemon!: Pokemon;
  constructor(private pokemonService: PokemonService) {}

  toggleIsCool(object: any) {
    console.log(object);
  }

  getPokemon(id: number) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
    });
  }
}
