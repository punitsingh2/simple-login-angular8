import { Component, OnInit } from '@angular/core';
import { HttpclientService, Employee } from '../service/httpclient.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  username = ''
  employees:Employee[]
  empty = false

  constructor(private httpClientService: HttpclientService) { }

  ngOnInit() {
  }

  search(): void {
    this.httpClientService.search(this.username)
        .subscribe( 
          response =>this.handleSuccessfulResponse(response),
        );

  };
  handleSuccessfulResponse(response)
  {
    if (response.length === 0) {
      this.empty = true;
      } else {
       this.empty = false;
      }
      this.employees=response;
  }

}
