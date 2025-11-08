import { Component } from '@angular/core';
import users from './assignment1';
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-assignment',
  imports: [FormsModule,FontAwesomeModule,NgxPaginationModule],
  templateUrl: './assignment.html',
  styleUrl: './assignment.css',
})
export class Assignment {
users = users;
faPhone = faPhone;
faEnvelope=faEnvelope;
p:number =1;

}
