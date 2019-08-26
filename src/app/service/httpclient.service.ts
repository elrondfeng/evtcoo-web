import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) {}
}

export class EV {
  constructor(
    public vehiclePrice: string,
    public infrastructureUpgrade: string,
    public maintenanceCost: string,
    public lifelongMiles: string,
    public milesPerKWH: string,
    public batteryLeasingCost: string,
    public batteryReplacementCost: string,
    public dollarsPerKWH: string,
    public milesPerDay: string,
    public daysPerYear: string
  ) { }
}

export class ICE {
  constructor(
    public vehiclePrice: string,
    public maintenanceCost: string,
    public lifelongMiles: string,
    public MPG: string,
    public dollarsPerGallon: string,
    public milesPerDay: string,
    public daysPerYear: string
  ) {}
}



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {}

     getEmployees() {
    console.log('test call');
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>('http://localhost:8080/employees' + '/' + employee.empId);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>('http://localhost:8080/employees', employee);
  }

  public calculateEV(ev) {
    return this.httpClient.post<EV>('http://localhost:8080/ev', ev);
  }

  public calculateICE(ice) {
    return this.httpClient.post<ICE>('http://localhost:8080/ice', ice);
  }
}
