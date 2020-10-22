import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  API_SERVER = "http://localhost:3000";
  data: any;

  // private list: BehaviorSubject<any> = new BehaviorSubject({});



  constructor(private httpClient: HttpClient) { 

  }

  getAnimals(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/getAnimalsList')
    .pipe(map(items => {
      // this.list.next(items)
      return items;
    }));
  }
}
