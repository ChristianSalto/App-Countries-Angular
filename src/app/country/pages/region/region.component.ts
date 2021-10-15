import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [`
     button{
       margin-right:5px;
     }
  `],
})
export class RegionComponent {
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  termino: string = '';
  paises: Pais[] = []

  constructor(private paisService: PaisService) {}

  getClassActiva( region : string ){
    return region === this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  handleClick( region : string ){

    if( region === this.regionActiva) return

    this.paises = []

    this.regionActiva = region;
    this.paisService.getPaisByRegion( this.regionActiva ).subscribe(res => {
      this.paises = res
    })
  }
}
