
import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "./data/employee.service";
import {Employee} from "./data/employee"
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee: Employee[];
  getEmployeeSub: any;
  loadError:boolean=false;

  constructor(private EmpService:EmployeeService) { }

  ngOnInit() {
    this.getEmployeeSub = this.EmpService.getEmployees().subscribe(data => {
      this.employee = data;
    }, error => {
        this.loadError = true;
      });
  }
  ngOnDestroy(){
    if(this.getEmployeeSub) this.getEmployeeSub.unsubscribe();
  }
}