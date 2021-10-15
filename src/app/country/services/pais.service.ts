import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'flag,name,capital,population,cca2');
  }

  constructor(private http: HttpClient) {}

  handleSearchPais(termino: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.apiUrl}/name/${termino}`, {
      params: this.httpParams,
    });
  }

  handleSearchCapital(termino: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.apiUrl}/capital/${termino}`, {
      params: this.httpParams,
    });
  }

  getCapitalByCode(termino: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.apiUrl}/alpha/${termino}`);
  }

  getPaisByRegion(termino: string): Observable<Pais[]> {
    return this.http
      .get<Pais[]>(`${this.apiUrl}/region/${termino}`, {
        params: this.httpParams,
      })
      .pipe(tap(console.log));
  }
}
