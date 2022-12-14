import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  countries: any;
  filtro: string = '';

  constructor(private httpClient: HttpClient) {

    this.countries = this.httpClient.get('https://raw.githubusercontent.com/Jniecor/listaPaises-JSON/master/MOCK_DATA.json');

  }

}
