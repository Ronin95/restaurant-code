import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Salad {
  name: string;
  price: number;
  allergene: string[];
  notes: string[];
  sideeffects: string[];
  descriptionDE: string;
}

interface Menu {
  [x: string]: Salad[];
  Salate: Salad[];
}

interface Data {
  menu: Menu;
}

@Component({
  selector: 'app-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.scss']
})
export class SaladsComponent implements OnInit {
  panelOpenState = false;
  salads: Salad[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.fetchData().subscribe(data => {
      this.salads = data[0].menu.Salate;
    });
  }

  fetchData(): Observable<Data[]> {
    return this.http.get<Data[]>('./assets/menu.json');
  }
}
