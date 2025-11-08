import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
  //styles: ['h4 { color:red; }']
  //encapsulation:ViewEncapsulation.ShadowDom

})
export class DataBinding {
  myName : String = "sriram";
  img_url: String ="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3c65741b/images/Titan/Catalog/1698SL01_1.jpg?sw=600&sh=600";
  flag : boolean = false;
  col_span_value = 2;

  toogleFlag(){
    this.flag =! this.flag;
  }

  num1: number = 10;
  num2: number = 20;

  addResult: any;
  addition(a:any,b:any){
    // this.addResult= +a +  +b;\
    this.addResult= Number(a) +  Number(b);
    // this.addResult= parseInt(a) +  parseInt(b);

  }

  hiddenValue : boolean = false ; 

  hiddenParagraph(){
    this.hiddenValue = ! this.hiddenValue;
  }

  input1: string ="this is gonna update";

  fahrenheitResult : any;

  celciusToFahrenheit(a:any){
    this.fahrenheitResult = (Number(a)*(9/5))+32;

  }

  stateN:any;
  getState(state:any){

    this.stateN  = state;

  }

  selectedS: String  = "";

  arthResult:any;
  selectedOp:any;
  arth(a:any,b:any,c:any){
    this.selectedOp = a;
    if (a==='add'){
      this.arthResult= Number(b) + Number(c);
    }else if(a=='minus'){
      this.arthResult= Number(b) - Number(c);
    }else if(a==='multiply'){
      this.arthResult= Number(b) * Number(c);
    }else if(a==='division'){
      this.arthResult= Number(b) / Number(c);
    }
  }

  
}
