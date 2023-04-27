import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Food1Component } from './food1/food1.component';
import { Food2Component } from './food2/food2.component';
import { Food3Component } from './food3/food3.component';
import { Food4Component } from './food4/food4.component';

@Component({
  selector: 'app-favorite-foods',
  templateUrl: './favorite-foods.component.html',
  styleUrls: ['./favorite-foods.component.scss']
})
export class FavoriteFoodsComponent implements OnInit {
  ngOnInit() {
  }

  constructor(public dialog: MatDialog) { }

  openFood1() {
    this.dialog.open(Food1Component);
  }
  
  openFood2() {
    this.dialog.open(Food2Component);
  }
  
  openFood3() {
    this.dialog.open(Food3Component);
  }
  
  openFood4() {
    this.dialog.open(Food4Component);
  }
}