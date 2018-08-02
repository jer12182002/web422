import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable'
import {Position}from "./position";

@Injectable()
export class PositionService {
    
  constructor(private http: HttpClient) { }
  gePositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${"https://nameless-plateau-79111.herokuapp.com"}/positions`)
  }


}
