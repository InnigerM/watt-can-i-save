import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ElectricityPrice } from 'src/app/models/electricity-price';
import { ElectricityPriceService } from 'src/app/services/electricity-price.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component {

  electricityPrices$: Observable<ElectricityPrice[]> = null;
  city: string;
  selectedPrice: ElectricityPrice;

  constructor(private eps: ElectricityPriceService) {}

  saveElectricityPrices(event: any) {
    console.log(event);
    this.electricityPrices$ = this.eps.getCity(this.city);
  }

}
