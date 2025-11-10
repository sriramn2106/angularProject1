import { Component, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTrash
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-data',
  imports: [FontAwesomeModule
  ],
  templateUrl: './employee-data.html',
  styleUrl: './employee-data.css',
  inputs:['employee'],
  outputs:['onDelete']
})
export class EmployeeTable {
   employee: any;

   faTrash = faTrash;

   onDelete = new EventEmitter<number>();

   delete(empId: number) {
    console.log("delete function")
    this.onDelete.emit(empId);
  }
}
