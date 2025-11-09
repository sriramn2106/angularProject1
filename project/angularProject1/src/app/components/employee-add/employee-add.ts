import { Component,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs:['onAdd']
})
export class EmployeeAdd {

  onAdd = new EventEmitter<any>();

  name : any ='';
  salary: any='';
  gender: any ='';
  dept : any='';
  status: any='';
  role : any='';

  addEmployee() {
    //if (!this.name || !this.salary) return;
      const newEmp = {
      name: this.name,
      salary: Number(this.salary),
      gender: this.gender,
      dept: this.dept,
      status: this.status,
      role: this.role,
    };
    this.onAdd.emit(newEmp);
    this.name = this.salary = this.gender = this.dept = this.status = this.role = '';
  }
}
