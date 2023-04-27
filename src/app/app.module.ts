import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FavoriteFoodsComponent } from './favorite-foods/favorite-foods.component';
import { FooterComponent } from './footer/footer.component';
import { CompleteMenuComponent } from './complete-menu/complete-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { Food1Component } from './favorite-foods/food1/food1.component';
import { Food2Component } from './favorite-foods/food2/food2.component';
import { Food3Component } from './favorite-foods/food3/food3.component';
import { Food4Component } from './favorite-foods/food4/food4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavoriteFoodsComponent,
    FooterComponent,
    CompleteMenuComponent,
    Food1Component,
    Food2Component,
    Food3Component,
    Food4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
