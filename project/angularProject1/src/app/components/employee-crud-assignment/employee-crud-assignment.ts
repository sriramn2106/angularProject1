import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeAdd } from '../employee-add/employee-add';
import { EmployeeTable } from '../employee-data/employee-data';

@Component({
  selector: 'app-employee-crud-assignment',
  imports: [EmployeeTable,EmployeeAdd,CommonModule],
  templateUrl: './employee-crud-assignment.html',
  styleUrl: './employee-crud-assignment.css',
})
export class EmployeeCrudAssignment {


   employees:any[] = [
    {
      eId: 101,
      name: 'Sanjay',
      sal: 50000,
      gender: 'male',
      dept: 'IT',
      status: 'Active',
      role: 'Developer',
    },
    {
      eId: 102,
      name: 'Sita',
      sal: 90000,
      gender: 'female',
      dept: 'HR',
      status: 'Active',
      role: 'Manager',
    },
    {
      eId: 103,
      name: 'Sameer',
      sal: 70000,
      gender: 'male',
      dept: 'Finance',
      status: 'Inactive',
      role: 'Tester',
    },
    {
      eId: 104,
      name: 'Geeta',
      sal: 80000,
      gender: 'female',
      dept: 'IT',
      status: 'Active',
      role: 'Developer',
    },
    {
      eId: 105,
      name: 'Deepak',
      sal: 100000,
      gender: 'male',
      dept: 'HR',
      status: 'Inactive',
      role: 'Manager',
    },
  ];

  addEmployee(newEmp: any) {
    this.employees.push({ ...newEmp, eId: Date.now() });
  }
  
  deleteEmployee(empId: number) {
    this.employees = this.employees.filter(e => e.eId !== empId);
  }

}
