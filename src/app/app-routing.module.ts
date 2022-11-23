import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './feature/view/homepage/homepage.component';
import { WeaponListComponent } from './feature/view/weapon-list/weapon-list.component';

const routes: Routes = [
  {redirectTo:"homepage", path:"", pathMatch:"full"},
  {component: HomepageComponent, path:"homepage"},
  {component: WeaponListComponent, path:"weapon-list"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
