import { Component, Input } from '@angular/core';
import { HistoriaImagen } from './../../modelos/historia-imagen';
@Component({
  selector: 'app-listar-pokemon',
  templateUrl: './listar-pokemon.component.html',
  styleUrls: ['./listar-pokemon.component.scss']
})
export class ListarPokemonComponent{

@Input() public pokemones: Array<HistoriaImagen> = [];




}
