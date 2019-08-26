import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee, EV, ICE } from '../service/httpclient.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  user: Employee = new Employee('', '', '', '');

  ev: EV = new EV('', '', '', '', '', '', '', '', '', '');
  ice: ICE = new ICE('', '', '', '', '', '', '');


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
    this.httpClientService.calculateEV((this.ev))
      .subscribe(data => {
        alert(data);
      });
  }

  calculateICE(): void {
    this.httpClientService.calculateICE((this.ice))
      .subscribe(data => {
        alert(data);
      });
  }

}
