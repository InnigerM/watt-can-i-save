import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import {  first, map, Observable, take } from 'rxjs';
import { ElectricityPrice } from '../models/electricity-price';

@Injectable({
  providedIn: 'root'
})
export class ElectricityPriceService {

  private FILE_PATH: string = '/assets/energy-prices.json';

  constructor(private httpClient: HttpClient) { }

  getCity(query: string): Observable<ElectricityPrice[]> {
    return this.httpClient.get<ElectricityPrice[]>(this.FILE_PATH)
    .pipe(
      map(prices => prices.filter(
        price => price.municipalityLabel.toLowerCase().includes(query.toLowerCase())
      )),
      map(prices => prices.slice(0, 5))
    );

  }


}
