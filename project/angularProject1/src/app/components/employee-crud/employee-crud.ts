import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTrash,faEye,faUserPlus
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-crud',
  imports: [FontAwesomeModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCRUD {

  faTrash = faTrash;
  faEye = faEye;
  faUserPlus = faUserPlus; 

  employees = [
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

  // deleteEmp(emp:any){
  //   const index = this.employees.findIndex(e => e.eId === emp.eId);
  //   if (index !== -1) {
  //     this.employees.splice(index, 1); 
  //   } 
  // }

  onClickDelete(emp:any) {
    // this.employees = this.employees.filter(e => e.eId !== emp.eId);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this Employee data!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.employees = this.employees.filter(e => e.eId !== emp.eId);
          // this.deleteEmp(emp);
          swalWithBootstrapButtons.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          }
        );
        // this.employees = this.employees.filter(e => e.eId !== emp.eId);
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
          });
        }
      });
  }

  


}
