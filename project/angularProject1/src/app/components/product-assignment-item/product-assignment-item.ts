import { Component } from '@angular/core';

@Component({
  selector: 'app-product-assignment-item',
  imports: [],
  templateUrl: './product-assignment-item.html',
  styleUrl: './product-assignment-item.css',
  inputs :['product']
})
export class ProductAssignmentItem {
  product :any;
}
