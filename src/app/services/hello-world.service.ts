import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private httpClient: HttpClient) { }

  getHelloWorld(): Observable<any> {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/ditto');
  }


  getHelloWorld1(): Observable<any> {
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  }

  getHelloWorld2(): Observable<any> {
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  }

  getHelloWorld3(): Observable<any> {
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
  }
}
