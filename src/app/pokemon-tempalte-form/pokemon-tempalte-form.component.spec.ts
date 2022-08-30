import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTempalteFormComponent } from './pokemon-tempalte-form.component';

describe('PokemonTempalteFormComponent', () => {
  let component: PokemonTempalteFormComponent;
  let fixture: ComponentFixture<PokemonTempalteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTempalteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTempalteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
