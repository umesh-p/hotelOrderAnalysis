import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuSectionsArray:Array<any> = [];
  newSection:string;

  constructor(private dataService : DataService) {
  }
  ngOnInit() {
    this.menuSectionsArray =  this.dataService.getMenuValue();
  }
  addSection(event){
    let menuSectionObject = {};
    menuSectionObject["name"] = event;
    menuSectionObject["items"] = [];
    this.menuSectionsArray.push(menuSectionObject);
    this.newSection = "";
  }
  saveMenu(){
    this.dataService.setMenuValue(this.menuSectionsArray);
  }
  sendMenuData(event){
    let objIndex = this.menuSectionsArray.findIndex(data => data.name == event.key);
    this.menuSectionsArray[objIndex]["items"].push(event.newObject);
  }
}
