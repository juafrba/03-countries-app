import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {
  name: string = ''
  hasError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];

  constructor(
    private countryService: CountryService,
  ) { }

  search(name: string): void {
    this.hasError = false;
    this.name = name;
    this.suggestedCountries = [];
    this.countryService.searchCapital(this.name)
    .subscribe(countries => {
        this.countries = countries;
      }, () => {
        this.hasError = true;
        this.countries = [];
      });
  }

  suggestion(name: string): void {
    this.hasError = false;
    this.name = name;
    this.countryService.searchCountry(this.name)
    .subscribe(countries => {
        this.suggestedCountries = countries;
      }, () => {
        this.hasError = true;
        this.suggestedCountries = [];
      });
  }
}
