import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ],
})
export class ByRegionComponent {
  name: string = ''
  hasError: boolean = false;
  countries: Country[] = [];
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';

  constructor(
    private countryService: CountryService,
  ) { }

  activateRegion( region: string): void {
    if (region === this.activeRegion) {
      return;
    }

    this.countries = [];
    this.activeRegion = region;
    this.search(region);
  }

  search(name: string): void {
    this.hasError = false;
    this.name = name;
    this.countryService.searchRegion(this.name)
    .subscribe(countries => {
        this.countries = countries;
      }, () => {
        this.hasError = true;
        this.countries = [];
      });
  }

  getCssClass(region: string): string {
    return region !== this.activeRegion
      ? 'btn btn-outline-primary'
      : 'btn btn-primary';
  }
}
