import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee, EV, ICE } from '../service/httpclient.service';
import {print} from 'util';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  evDollarPerMile: number;
  iceDollarPerMile: number;

  user: Employee = new Employee('', '', '', '');

  ev: EV = new EV(75000, 0.6, 0, 250000, 2,
    0.1, 0, 0,  70, 240, 0.302);

  ice: ICE = new ICE(60000, 0.302, 200000, 11, 2.73, 70, 240);

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          alert('Employee created successfully.');
        });
  }

  calculateEV(): void {
    console.log(this.ev.vehiclePrice);
    console.log(this.ev.batteryLeasingCost);
    this.httpClientService.calculateEV((this.ev))
      .subscribe(data => {
        console.log(typeof data);
        console.log(typeof this.evDollarPerMile);
        /*alert('return value is : ' + data);*/
        this.evDollarPerMile = data;
        console.log('calculated EV dollar per mile is ' + this.evDollarPerMile);
      });
  }

  calculateICE(): void {
    this.httpClientService.calculateICE((this.ice))
      .subscribe(data => {
        this.iceDollarPerMile = data;
        console.log('calculated ICE dollar per mile is : ' + this.iceDollarPerMile);
      });
  }

}
