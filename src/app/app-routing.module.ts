import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import {AddEmployeeComponent} from './add-employee/add-employee.component'
import {ViewEmployeesComponent} from './view-employees/view-employees.component'
import {SearchEmployeeComponent} from './search-employee/search-employee.component'


const routes: Routes = [
  {path: '', component: ViewEmployeesComponent,canActivate:[AuthGaurdService]},
  {path: 'addEmployee', component: AddEmployeeComponent,canActivate:[AuthGaurdService]},
  {path: 'search', component: SearchEmployeeComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
