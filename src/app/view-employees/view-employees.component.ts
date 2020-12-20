import { Component, OnInit } from '@angular/core';
import { HttpclientService, Employee } from '../service/httpclient.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees:Employee[];
  constructor(
    private httpClientService:HttpclientService
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  handleSuccessfulResponse(response)
{
    this.employees=response;
}

}
