import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent {

  termino: string = '';
  error: boolean = false;
  paises: Pais[] = [];

  paiseSsuggestions: Pais[] = [];
  showSuggestions: boolean = false;


  constructor(private paisService: PaisService) { }

  handleSubmit( termino : string ) {
    this.error = false;
    this.termino = termino
    this.showSuggestions = false;

    this.paisService.handleSearchCapital(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.error = true;
        this.paises = [];
      }
    );
  }

  suggestions(termino: string) {
    this.error = false;
    this.termino = termino;
    this.showSuggestions = true;

    if (this.termino === '') this.showSuggestions = false;

    this.paisService.handleSearchCapital(termino).subscribe(
      (paises) => (this.paiseSsuggestions = paises.splice(0, 5)),
      (err) => (this.paiseSsuggestions = [])
    );
  }

}
