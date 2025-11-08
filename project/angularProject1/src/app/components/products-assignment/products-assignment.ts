import { Component } from '@angular/core';
import listOfItems from './products-assignment1';
import { ProductAssignmentItem } from '../product-assignment-item/product-assignment-item';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products-assignment',
  imports: [ProductAssignmentItem,NgxPaginationModule],
  templateUrl: './products-assignment.html',
  styleUrl: './products-assignment.css',
})
export class ProductsAssignment {
 products = listOfItems;
 p:number =1;

}
