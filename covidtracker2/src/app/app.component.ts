import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  readonly ROOT_URL = 'https://api.covid19api.com/'

  posts: any;

  constructor(private http: HttpClient) {
    this.http.get(this.ROOT_URL).toPromise().then(data => {
      console.log(data);
    });
  }
}
