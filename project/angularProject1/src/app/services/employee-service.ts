import { Injectable } from '@angular/core';
import employee_data from './employee_service_data'
import e from 'express';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private emp = employee_data;

  getAllEmployees(){
    return employee_data;
  }

  getMaleEmployees(){
    return this.emp.filter((a:any) => a.gender == "male");
  }

  getFemaleEmployees(){
    return this.emp.filter((e:any)=> e.gender == "female");
  }

  
}
