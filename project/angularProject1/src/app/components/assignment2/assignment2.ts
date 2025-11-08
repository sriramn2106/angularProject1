
import { Component } from '@angular/core';
import products from './assignment2_data';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPhone,
  faEnvelope,
  faStar,
  faLandmark,
  faAddressBook,
  faUser,
  faDollarSign,
  faTags,
  faInfoCircle,
  faBoxOpen,
} from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import { Textonly } from '../../directives/textonly';
import { Zoomin} from '../../directives/zoomin';

@Component({
  selector: 'app-assignment2',
  imports: [FormsModule, FontAwesomeModule, NgxPaginationModule,Textonly,Zoomin],
  templateUrl: './assignment2.html',
  styleUrl: './assignment2.css',
})
export class Assignment2 {
  filteredProducts = products;
  categoryArr: string[] = [];
  selectedCategory: string = 'all';

  constructor() {
    this.categoryArr = products.map((prod) => prod.category); // duplicate categories
    this.categoryArr = ['all', ...new Set(this.categoryArr)]; // unique categories
  }
  onCategoryChange() {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = products;
    } else {
      this.filteredProducts = products.filter(
        (product) => product.category === this.selectedCategory
      );
    }
  }

  searchString: String = '';

  search() {
    const searchWord = this.searchString.toLowerCase();
    this.filteredProducts = products.filter(
      (p) =>
        p.title.toLowerCase().includes(searchWord) ||
        p.description.toLowerCase().includes(searchWord) ||
        p.category.toLowerCase().includes(searchWord)
    );
  }

  asc(){
    this.filteredProducts.sort((a,b)=>
      a.price-b.price
    );
  }

    dsc(){
    this.filteredProducts.sort((a,b)=>
      b.price-a.price
    );
  }

  faStar = faStar;
  faDollarSign = faDollarSign;
  faTags = faTags;
  faInfoCircle = faInfoCircle;
  faBoxOpen = faBoxOpen;
  p: number = 1;
  
}