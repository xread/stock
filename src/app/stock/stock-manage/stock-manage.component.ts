import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks:Array<Stock>;



  constructor() { }

  ngOnInit() {

    this.stocks = [
      new Stock(11,"第一只股票",1.1,3,"第一只股票",["IT","互联网"]),
      new Stock(12,"第一只股票",1.1,4,"第一只股票",["IT","互联网"]),
      new Stock(13,"第一只股票",1.1,5,"第一只股票",["IT","互联网"]),
      new Stock(14,"第一只股票",1.1,1,"第一只股票",["IT","互联网"]),
      new Stock(15,"第一只股票",1.1,0,"第一只股票",["IT","互联网"]),
      new Stock(16,"第一只股票",1.1,2,"第一只股票",["IT","互联网"]),
      new Stock(17,"第一只股票",1.1,3,"第一只股票",["IT","互联网"]),
      new Stock(18,"第一只股票",1.1,3,"第一只股票",["IT","互联网"]),
      new Stock(19,"第一只股票",1.1,5,"第一只股票",["IT","互联网"]),
      new Stock(20,"第一只股票",1.1,4,"第一只股票",["IT","互联网"]),
      new Stock(21,"第一只股票",1.1,4,"第一只股票",["IT","互联网"])
    ]
  }

}

export class Stock {
  constructor(
      public id:number,
      public name:string,
      public price:number,
      public rating:number,
      public desc:string,
      public categories:Array<string>
  ){
  }
}