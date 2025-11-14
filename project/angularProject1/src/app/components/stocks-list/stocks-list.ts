import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stocks-list',
  imports: [],
  templateUrl: './stocks-list.html',
  styleUrl: './stocks-list.css',
})
export class StocksList {
  stocksArr:any[] =[]
  stocks_Url = "http://endeavourtech.ddns.net:8095/stockanalytics/stocks/getAllStockFundamentalsJPA";

  constructor(private httpClient:HttpClient){}

  ngOnInit(){
    this.httpClient.get(this.stocks_Url).subscribe((resp:any)=>
      this.stocksArr = resp)
  }

}
