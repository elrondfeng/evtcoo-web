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
    public  vehiclePrice: number,
    public  evMaintenanceSaving: number,
    public  infrastructureUpgrade: number,
    public  lifelongMiles: number,
    public  milesPerKWH: number,
    public  dollarsPerKWH: number,
    public  batteryLeasingCost: number,
    public  batteryReplacementCost: number,
    public  milesPerDay: number,
    public  daysPerYear: number,
    public  iceMaintenanceCost: number
  ) {}
}

export class ICE {
  constructor(
    public vehiclePrice: number,
    public maintenanceCost: number,
    public lifelongMiles: number,
    public milesPerGallon: number,
    public dollarsPerGallon: number,
    public milesPerDay: number,
    public daysPerYear: number
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
    return this.httpClient.post<number>('http://localhost:8080/ev', ev);
  }

  public calculateICE(ice) {
    return this.httpClient.post<number>('http://localhost:8080/ice', ice);
  }
}
