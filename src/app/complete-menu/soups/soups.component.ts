import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InfoSoupComponent } from './info-soup/info-soup.component';


interface Soup {
  name: string;
  price: number;
  allergene: string[];
  notes: string[];
  sideeffects: string[];
  descriptionDE: string;
}

interface Menu {
  Suppen: Soup[];
}

interface Data {
  menu: Menu;
}


@Component({
  selector: 'app-soups',
  templateUrl: './soups.component.html',
  styleUrls: ['./soups.component.scss']
})
export class SoupsComponent implements OnInit {
  panelOpenState = false;
  soups: Soup[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) { }
  ngOnInit() {
    this.fetchData().subscribe(data => {
      this.soups = data[0].menu.Suppen;
    });
  }

  fetchData(): Observable<Data[]> {
    return this.http.get<Data[]>('./assets/menu.json');
  }
  
  openInfo() {
    this.dialog.open(InfoSoupComponent);
  }

}
