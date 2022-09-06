import { Component, Input } from '@angular/core';
import { HistoriaImagen } from './../../modelos/historia-imagen'
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent{

@Input() public pokemon!: HistoriaImagen;

}
