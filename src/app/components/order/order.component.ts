import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  numberOfTables:number = 0;
  ordersList:Array<any> = [];
  menu:Array<any> = [];
  currentOrder:{};

  constructor(private dataService:DataService) {
  }

  ngOnInit() {
    this.menu = this.dataService.getMenuValue();
  }

  addTables(totalTables){
    this.numberOfTables = totalTables;
    for(let i=1;i<=this.numberOfTables;i++){
        let order:object = {};
        order["table"] = "Table - "+i;
        order["index"] = i;
        order["menuOrder"] = [];
        this.ordersList.push(order);
    }
  }

  onTableClicked(order){
    this.currentOrder = order.menuOrder;

    console.log(this.ordersList);

  }



}
