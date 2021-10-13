import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  handleSearchPais(termino: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.apiUrl}/name/${termino}`);
  }

  handleSearchCapital(termino: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.apiUrl}/capital/${termino}`);
  }

  getCapitalByCode(termino: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.apiUrl}/alpha/${termino}`);
  }
}
