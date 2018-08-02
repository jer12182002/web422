import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable'
import { Employee } from "./employee";

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient) { }
    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${"https://nameless-plateau-79111.herokuapp.com"}/employees`)
    }


}