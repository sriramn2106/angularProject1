import { Component,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule,FontAwesomeModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs:['onAdd']
})
export class EmployeeAdd {

faUserPlus  = faUserPlus;

  onAdd = new EventEmitter<any>();

  name : any ='';
  sal: any = '';
  gender: any ='';
  dept : any='';
  status: any='';
  role : any='';

  addEmployee() {
    if (!this.name || !this.sal) return;
      const newEmp = {
      name: this.name,
      sal: Number(this.sal),
      gender: this.gender,
      dept: this.dept,
      status: this.status,
      role: this.role,
    };
    this.onAdd.emit(newEmp);
    this.name = this.sal = this.gender = this.dept = this.status = this.role = '';
  }
}
