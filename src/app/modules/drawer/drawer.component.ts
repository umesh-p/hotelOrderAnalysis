import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  selectedItem:string = 'dashboard';

  constructor(private router:Router) { }

  ngOnInit() {
    this.selectedItem = this.router.url.slice(1,this.router.url.length);
  }
  changeRoute(event){
    this.router.navigateByUrl('/'+event);

  }

}
