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
import {MatCardModule} from '@angular/material/card';
import { SoupsComponent } from './complete-menu/soups/soups.component';
import { SaladsComponent } from './complete-menu/salads/salads.component';
import { MainCourseComponent } from './complete-menu/main-course/main-course.component';
import { AmericanBurgerComponent } from './complete-menu/american-burger/american-burger.component';
import { GrillComponent } from './complete-menu/grill/grill.component';
import { VegetarianComponent } from './complete-menu/vegetarian/vegetarian.component';
import { SideDishesComponent } from './complete-menu/side-dishes/side-dishes.component';
import { DessertsComponent } from './complete-menu/desserts/desserts.component';
import { AlcoholicFreeDrinksComponent } from './complete-menu/alcoholic-free-drinks/alcoholic-free-drinks.component';
import { AlcoholicDrinksComponent } from './complete-menu/alcoholic-drinks/alcoholic-drinks.component';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { InfoSoupComponent } from './complete-menu/soups/info-soup/info-soup.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';

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
    Food4Component,
    SoupsComponent,
    SaladsComponent,
    MainCourseComponent,
    AmericanBurgerComponent,
    GrillComponent,
    VegetarianComponent,
    SideDishesComponent,
    DessertsComponent,
    AlcoholicFreeDrinksComponent,
    AlcoholicDrinksComponent,
    InfoSoupComponent,
    ContactComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
