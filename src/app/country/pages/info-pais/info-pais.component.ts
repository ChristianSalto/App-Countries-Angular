import { viewClassName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-info-pais',
  templateUrl: './info-pais.component.html',
  styles: [],
})
export class InfoPaisComponent implements OnInit {
  pais!: Pais;
  lenguaje: string = '';
  translations: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getCapitalByCode(id)),
        tap(console.log)
      )
      .subscribe(([pais]) => {
        this.pais = pais;
        this.lenguaje = Object.values(pais.languages).toString();
        this.translations = Object.values(this.pais.translations);
      });
  }
}
