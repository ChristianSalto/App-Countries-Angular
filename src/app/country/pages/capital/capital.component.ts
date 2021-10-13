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


  constructor(private paisService: PaisService) { }

  handleSubmit( termino : string ) {
    this.error = false;
    this.termino = termino

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

}
