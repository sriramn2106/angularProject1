import { Component } from '@angular/core';
import * as data from './users.json';
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-user-list',
  imports: [FormsModule,FontAwesomeModule,NgxPaginationModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userArr = (data as any).default;
  faPhone = faPhone;
  faEnvelope=faEnvelope;
  p:number = 1;
  

}
