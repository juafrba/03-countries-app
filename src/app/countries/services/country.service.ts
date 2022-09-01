import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apirUrl: string = 'https://restcountries.com/v3.1/';

  get params(): HttpParams {
    return new HttpParams()
      .set('fields', 'name,capital,flags,population,cca2');
  }

  constructor(
    private http: HttpClient,
  ) { }

  searchCountry(name: string): Observable<Country[]> {
    const url = `${this.apirUrl}/name/${name}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  searchCapital(name: string): Observable<Country[]> {
    const url = `${this.apirUrl}/capital/${name}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  searchRegion(name: string): Observable<Country[]> {
    const url = `${this.apirUrl}/region/${name}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  getCountry(code: string): Observable<Country[]> {
    const url = `${this.apirUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url);
  }
}
