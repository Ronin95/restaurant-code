import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AmericanBurgers {
  name: string;
  price: number;
  allergene: string[];
  notes: string[];
  sideeffects: string[];
  descriptionDE: string;
}

interface Menu {
  [x: string]: AmericanBurgers[];
  AmericanBurger: AmericanBurgers[];
}

interface Data {
  menu: Menu;
}

@Component({
  selector: 'app-american-burger',
  templateUrl: './american-burger.component.html',
  styleUrls: ['./american-burger.component.scss']
})
export class AmericanBurgerComponent implements OnInit {
  panelOpenState = false;
  amBurgers: AmericanBurgers[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.fetchData().subscribe(data => {
      this.amBurgers = data[0].menu.AmericanBurger;
    });
  }

  fetchData(): Observable<Data[]> {
    return this.http.get<Data[]>('./assets/menu.json');
  }
}
