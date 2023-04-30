import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  // { path: '', component: PathToImprintComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'imprint', component: ImprintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
