import { Component, OnInit } from '@angular/core';
import { SoupsComponent } from '../soups.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

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
  selector: 'app-info-soup',
  templateUrl: './info-soup.component.html',
  styleUrls: ['./info-soup.component.scss']
})
export class InfoSoupComponent implements OnInit {
  [x: string]: any;
  soups: Soup[] = [];
  sideEffects: string | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this['fetchData']().subscribe((data: { menu: { Suppen: Soup[]; }; }[]) => {
      this.soups = data[0].menu.Suppen;
    });
  }

  fetchData(): Observable<Data[]> {
    return this.http.get<Data[]>('./assets/menu.json');
  }


}
