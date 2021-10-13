import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [],
})
export class PaisComponent {
  termino: string = '';
  error: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  handleSubmit( termino : string ) {
    this.error = false;
    this.termino = termino

    this.paisService.handleSearchPais(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.error = true;
        this.paises = [];
      }
    );
  }


  suggestions( termino : string ){
    this.error =  false;
  }
}
