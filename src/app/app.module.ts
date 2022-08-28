import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { Task1Component } from './components/task1/task1.component';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { PokemonListComponent } from './pokemon-base/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [AppComponent, ListComponent, Task1Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule,PokemonBaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
