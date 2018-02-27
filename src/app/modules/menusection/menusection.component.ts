import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menusection',
  templateUrl: './menusection.component.html',
  styleUrls: ['./menusection.component.css']
})
export class MenusectionComponent implements OnInit {

  @Input() headerTitle: string;
  @Output() sendMenuData = new EventEmitter<object>();
  @Input() menuSectionArray: Array<any> ;

  private newMenuItem: any = {};

  constructor() { }

  ngOnInit() {
    console.log(this.menuSectionArray);
  }

 addmenuItemValue() {
     this.sendMenuData.emit({"key":this.headerTitle , "newObject":this.newMenuItem});
     this.newMenuItem = {};
 }

 deletemenuItemValue(index) {
     this.menuSectionArray.splice(index, 1);
 }


}
