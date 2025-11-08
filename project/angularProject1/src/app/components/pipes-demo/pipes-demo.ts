import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';
import { FormsModule } from '@angular/forms';
import { AgePipe } from '../../custom-pipes/age-pipe';
import { RomanPipe } from '../../custom-pipes/roman-pipe';
import { SalutationPipe } from '../../custom-pipes/salutation-pipe';
import { SearchPipe } from '../../custom-pipes/search-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule,OrdinalPipe,FormsModule,AgePipe,RomanPipe,SalutationPipe,SearchPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  myName : string = "watch";

  dateObj = new Date();

  user = {id:4776,name:"john"};

  cur:any = 1000; 

  numArr = [1,3,5,8,0];

  num : number  = 22;

  enterAge : string= "04-06-2020";

  searchtext: string = '';

  employees = [
  { eId: 101, name: 'Sanjay', sal: 50000, gender: 'male', dept: 'IT', status: 'Active', role: 'Developer' },
  { eId: 102, name: 'Sita', sal: 90000, gender: 'female', dept: 'HR', status: 'Active', role: 'Manager' },
  { eId: 103, name: 'Sameer', sal: 70000, gender: 'male', dept: 'Finance', status: 'Inactive', role: 'Tester' },
  { eId: 104, name: 'Geeta', sal: 80000, gender: 'female', dept: 'IT', status: 'Active', role: 'Developer' },
  { eId: 105, name: 'Deepak', sal: 100000, gender: 'male', dept: 'HR', status: 'Inactive', role: 'Manager' }
];

}
