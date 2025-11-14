import { Component, ViewEncapsulation } from '@angular/core';
import { TopDeals } from '../top-deals/top-deals';
import { Deals } from '../deals/deals';
import { DataBinding } from '../data-binding/data-binding';
import { Directives } from '../directives/directives';
import { Product } from '../product/product';
import { MyModal } from '../my-modal/my-modal';
import { UserList } from '../user-list/user-list';
import { Assignment } from '../assignment/assignment';
import { Assignment2 } from '../assignment2/assignment2';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ProductsAssignment } from '../products-assignment/products-assignment';
import { EmployeeCrudAssignment } from '../employee-crud-assignment/employee-crud-assignment';
import { EmployeeServiceAssignment } from '../employee-service-assignment/employee-service-assignment';
import { CommentList } from '../comment-list/comment-list';
import { StocksList } from '../stocks-list/stocks-list';
import { CommentComponent } from '../comment-component/comment-component';
import { EmployeeModelService } from '../employee-model-service/employee-model-service';
import { Crudcomponent } from '../crudcomponent/crudcomponent';

@Component({
  selector: 'app-body',
  imports: [
    Crudcomponent
    //EmployeeModelService
    //CommentComponent
    //CommentList
    //StocksList
    //CommentList
    //EmployeeServiceAssignment
    //EmployeeCrudAssignment
    //ProductsAssignment
    //PipesDemo
    // EmployeeCRUD
    //Assignment2
    //Assignment
    //UserList
    // TopDeals,Deals,DataBinding,
    //Directives,
     //Product
    //MyModal,
    
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  //encapsulation:ViewEncapsulation.ShadowDom
})
export class Body {

}
