import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeModelsService } from '../../services/employee-models-service';

@Component({
  selector: 'app-employee-model-service',
  imports: [],
  templateUrl: './employee-model-service.html',
  styleUrl: './employee-model-service.css',
})
export class EmployeeModelService {

  employees: Employee[] = [];
  constructor(public empService: EmployeeModelsService) {
    this.empService.getEmployees().subscribe((response: Employee[]) => {
      this.employees = response;
    });
  }
}
