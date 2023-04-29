import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Dessert {
  name: string;
  price: number;
  allergene: string[];
  notes: string[];
  sideeffects: string[];
  descriptionDE: string;
}

interface Menu {
  [x: string]: Dessert[];
  Nachspeisen: Dessert[];
}

interface Data {
  menu: Menu;
}

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent implements OnInit {
  panelOpenState = false;
  nachspeisen: Dessert[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.fetchData().subscribe(data => {
      this.nachspeisen = data[0].menu.Nachspeisen;
    });
  }

  fetchData(): Observable<Data[]> {
    return this.http.get<Data[]>('./assets/menu.json');
  }
}
