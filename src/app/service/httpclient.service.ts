import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public dateOfJoining: string,
    public salary: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  apiUrl = environment.api;
  constructor( private httpClient: HttpClient) { }

  getEmployees() {
    return this.httpClient.get<Employee[]>(this.apiUrl+ `employee/employees`);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>(this.apiUrl + `employee/addEmployee`, employee);
  }

  

  public search(username: string): Observable<any> {
    return this.httpClient.get<Employee[]>(this.apiUrl + `employee/${username}`);;
  }
}
