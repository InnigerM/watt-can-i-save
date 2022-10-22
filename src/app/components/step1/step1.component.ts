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

  constructor(private electricityPriceService: ElectricityPriceService) {}

  searchElectricityPrices(event: any) {
    this.selectedPrice = null;
    this.electricityPrices$ = this.electricityPriceService.getCity(this.city);
  }

  selectPrice(electricityPrice: ElectricityPrice) {
    this.selectedPrice = electricityPrice;
  }

  savePrice() {
    console.log("save")
    this.electricityPriceService.savePrice(this.selectedPrice);

  }

}
