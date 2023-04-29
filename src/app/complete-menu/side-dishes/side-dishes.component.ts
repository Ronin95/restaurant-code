import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SideDish {
  name: string;
  price: number;
  allergene: string[];
  notes: string[];
  sideeffects: string[];
  descriptionDE: string;
}

interface Menu {
  [x: string]: SideDish[];
  Beilagen: SideDish[];
}

interface Data {
  menu: Menu;
}
@Component({
  selector: 'app-side-dishes',
  templateUrl: './side-dishes.component.html',
  styleUrls: ['./side-dishes.component.scss']
})
export class SideDishesComponent implements OnInit {
  panelOpenState = false;
  beilagen: SideDish[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.fetchData().subscribe(data => {
      this.beilagen = data[0].menu.Beilagen;
    });
  }

  fetchData(): Observable<Data[]> {
    return this.http.get<Data[]>('./assets/menu.json');
  }
}
