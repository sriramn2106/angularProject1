import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-service-assignment',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-service-assignment.html',
  styleUrl: './employee-service-assignment.css',
})
export class EmployeeServiceAssignment {

  employeeService  = inject(EmployeeService);


  selectedCategory:any = "allEmployees";
  employee_data :any[] =[];

  constructor(){
    this.loadDetails();
  }

  loadDetails(){
    if(this.selectedCategory ==="allEmployees"){
      this.employee_data =  this.employeeService.getAllEmployees();
    }else if(this.selectedCategory ==="maleEmployees"){
      this.employee_data =  this.employeeService.getMaleEmployees();
    }else{
      this.employee_data =  this.employeeService.getFemaleEmployees();
    }
  }




}
