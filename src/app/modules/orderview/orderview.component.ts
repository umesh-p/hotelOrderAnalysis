import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-orderview',
  templateUrl: './orderview.component.html',
  styleUrls: ['./orderview.component.css']
})
export class OrderviewComponent implements OnInit {

  @Input() menu;
  @Input() tableName:string;
  @Input() orderArray:Array<object>;
  @Input() index:number;


  @Output() sendOrderData = new EventEmitter<object>();

  newOrderItem:object = {
    "code":"",
    "price":0,
    "quantity":1
  };
  //orderArray:Array<object> = [];
  availableItems:Array<object> = [];
  selectedItem:any;
  totalAmount:number = 0;

  constructor() {
  }

  ngOnInit() {

    console.log()

      for (let key in this.menu) {
        for (let index in this.menu[key].items) {
          this.availableItems.push(this.menu[key].items[index]);
        }
      }

  }

  ngOnChanges(){
  }

  addmenuItemValue(){
    this.orderArray.push(this.newOrderItem);
    this.newOrderItem = {
      "code":"",
      "price":0,
      "quantity":1
    };
    this.selectedItem = {};
    this.calculateTotalAmonut();
  }

  deletemenuItemValue(index){
    this.orderArray.splice(index, 1);
    this.calculateTotalAmonut();
  }

  getSelectedItem(){
    this.newOrderItem["code"] = this.selectedItem["code"];
    this.newOrderItem["price"] = this.selectedItem["price"] * this.newOrderItem["quantity"];
  }

  onQuantityChange(){
    this.newOrderItem["price"] = this.selectedItem["price"] * this.newOrderItem["quantity"];
    this.calculateTotalAmonut();
  }

  onQuantityItemUpdate(event,i){
    let item = this.availableItems.filter(data => data["code"] == event);
    this.orderArray[i]["price"] = item[0]["price"] * this.orderArray[i]["quantity"];
    this.calculateTotalAmonut();
  }

  calculateTotalAmonut(){
      this.totalAmount = 0;

      for (let order in this.orderArray) {
        this.totalAmount = this.totalAmount + this.orderArray[order]["price"];
      }

  }

  onOrderSubmit(){

  }

}
