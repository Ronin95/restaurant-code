import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface VegetarianFood {
  name: string;
  price: number;
  allergene: string[];
  notes: string[];
  sideeffects: string[];
  descriptionDE: string;
}

interface Menu {
  [x: string]: VegetarianFood[];
  VegetarischeGerichte: VegetarianFood[];
}

interface Data {
  menu: Menu;
}

@Component({
  selector: 'app-vegetarian',
  templateUrl: './vegetarian.component.html',
  styleUrls: ['./vegetarian.component.scss']
})
export class VegetarianComponent implements OnInit {
  vegies: VegetarianFood[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.fetchData().subscribe(data => {
      this.vegies = data[0].menu.VegetarischeGerichte;
    });
  }

  fetchData(): Observable<Data[]> {
    return this.http.get<Data[]>('./assets/menu.json');
  }
}
