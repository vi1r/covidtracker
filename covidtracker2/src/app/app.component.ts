import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  
  readonly ROOT_URL = 'https://api.covid19api.com/summary'

  countries: any;
  allCountries: Map<any, any>;
  constructor(private http: HttpClient) {
    this.http.get(this.ROOT_URL).toPromise().then(data => {
      this.countries = data["Countries"];
    });
  }
}
