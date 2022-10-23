import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private electricityPriceService: ElectricityPriceService, private router: Router) {}

  searchElectricityPrices(event: any) {
    this.selectedPrice = null;
    this.electricityPrices$ = this.electricityPriceService.getCity(this.city);
  }

  selectPrice(electricityPrice: ElectricityPrice) {
    this.selectedPrice = electricityPrice;
  }

  savePrice() {
    this.electricityPriceService.savePrice(this.selectedPrice);
    this.router.navigate(['/rooms']);
  }

}
