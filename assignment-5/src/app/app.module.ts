import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing-module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { FooterComponent } from './footer.component';
import { ContentComponent } from './content.component';
import { HomeComponent} from './home.component';
import { EmployeesComponent} from './employees.component'
import { PositionsComponent} from './positions.component';
import { PageNotFoundComponent} from './page.notFound.component';
import {PositionService} from './data/position.service';
import {EmployeeService}from "./data/employee.service";
import { DatePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ContentComponent,
    HomeComponent,
    EmployeesComponent,
    PositionsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule
  ],
  providers: [PositionService,EmployeeService,DatePipe,DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
