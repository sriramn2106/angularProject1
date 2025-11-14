import { Component } from '@angular/core';
import { Crudcomponents } from '../../services/crudcomponents';
import { FormsModule } from '@angular/forms';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-crudcomponent',
  imports: [FormsModule],
  templateUrl: './crudcomponent.html',
  styleUrl: './crudcomponent.css',
})
export class Crudcomponent {

  employee: any[]= []

  firstName: string = '';
  lastName: string = '';
  email: string = ''; 
  sal: string =  ''; 
  gender:string = '';
  id: string = '';

  constructor(private crudService: Crudcomponents) { }

  ngOnInit(): void {
    this.getEmployees();   
  }

  getEmployees() {
    this.crudService.getEmployees()
      .subscribe(response => {
        this.employee = response;
      });
  }


  addEmployee() {
    const newEmployee = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      sal: this.sal,
      gender: this.gender,
      id : this.id
    };

    this.crudService.showLoading('Adding employee...');

    this.crudService.createEmployee(newEmployee)
      .subscribe(res => {
        this.getEmployees();
        this.clearForm();
        this.crudService.hideLoading();
      });
  }

  clearForm() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.sal = '';
    this.gender = '';
    this.id = '';
  }

  delete(id: number) {
    this.crudService.deleteEmployee(id)
      .subscribe(res => {
        this.getEmployees();
        this.clearForm();
      });
  }

  editEmployee(emp: any) {
    this.firstName = emp.firstName;
    this.lastName = emp.lastName;
    this.email = emp.email;
    this.sal = emp.sal;
    this.gender = emp.gender;
    this.id = emp.id;
  }

  updateEmployee() {
    const emp = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      sal: this.sal,
      gender: this.gender,
      id: this.id
    };

  this.crudService.update(this.id,emp)
    .subscribe(res => {this.getEmployees();
       this.clearForm();
    });
    
}

}
 

