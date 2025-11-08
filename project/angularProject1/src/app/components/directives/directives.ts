import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  num :number=4;

  cars = ['Tata', 'Honda', 'Toyota', 'Hyundai']

  employees = [
  { id: 1, name: 'John', role: 'Manager', salary: 85000, status: 'Active' },
  { id: 2, name: 'Alice', role: 'Developer', salary: 45000, status: 'Active' },
  { id: 3, name: 'Bob', role: 'Tester', salary: 30000, status: 'Inactive' },
  { id: 4, name: 'Eve', role: 'HR', salary: 40000, status: 'Active' }
];

tasks = [
  { id: 1, title: 'Complete Angular assignment', completed: false },
  { id: 2, title: 'Review pull requests', completed: true },
  { id: 3, title: 'Prepare project report', completed: false },
  { id: 4, title: 'Attend team meeting', completed: true },
  { id: 5, title: 'Update documentation', completed: false },
 ];

 toggleFunc(task:any) {
    task.completed = !task.completed;
    this.applyFilter();
 }


 selectedFilter = 'All';
 filteredTasks = [...this.tasks];

 applyFilter() {
    if (this.selectedFilter === 'Completed') {
      this.filteredTasks = this.tasks.filter(t => t.completed===true);
    } else if (this.selectedFilter === 'Pending') {
      this.filteredTasks = this.tasks.filter(t => t.completed=== false);
    } else {
      this.filteredTasks = [...this.tasks];
    }
  }

  cartItems = [
    { id: 1, name: 'Wireless Headphones', price: 2499, qty: 1 },
    { id: 2, name: 'Smart Watch', price: 4999, qty: 2 },
    { id: 3, name: 'Bluetooth Speaker', price: 1999, qty: 1 },
    { id: 4, name: 'Power Bank', price: 1299, qty: 3 }
  ];

  inQuantity(item: any) {
    item.qty++;
  }

  decQuantity(item: any) {
    if (item.qty > 1) {
      item.qty--;
    }
  }

  getTotal(): number {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.price * item.qty;
    }
    return total;

    }
    
}
