import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-data',
  imports: [],
  templateUrl: './employee-data.html',
  styleUrl: './employee-data.css',
  inputs:['employee'],
  outputs:['onDelete']
})
export class EmployeeTable {
   employee: any;

   onDelete = new EventEmitter<number>();

   delete(empId: number) {
    console.log("delete function")
    this.onDelete.emit(empId);
  }
}
