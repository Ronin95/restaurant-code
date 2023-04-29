import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Grill {
  name: string;
  price: number;
  allergene: string[];
  notes: string[];
  sideeffects: string[];
  descriptionDE: string;
}

interface Menu {
  [x: string]: Grill[];
  GerichteGrill: Grill[];
}

interface Data {
  menu: Menu;
}

@Component({
  selector: 'app-grill',
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.scss']
})
export class GrillComponent implements OnInit {
  panelOpenState = false;
  grills: Grill[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.fetchData().subscribe(data => {
      this.grills = data[0].menu.GerichteGrill;
    });
  }

  fetchData(): Observable<Data[]> {
    return this.http.get<Data[]>('./assets/menu.json');
  }
}
