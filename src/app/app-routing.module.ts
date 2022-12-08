import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeheimComponent } from './feature/view/geheim/geheim.component';
import { HomepageComponent } from './feature/view/homepage/homepage.component';
import { RegistrationComponent } from './feature/view/registration/registration.component';
import { UserpageComponent } from './feature/view/userpage/userpage.component';
import { WeaponListComponent } from './feature/view/weapon-list/weapon-list.component';
const routes: Routes = [
  { redirectTo:"homepage", path:"", pathMatch:"full" },
  { component: HomepageComponent, path:"homepage" },
  { component: WeaponListComponent, path:"weapon-list" },
  { component: RegistrationComponent, path:"registration"},
  { component: UserpageComponent, path:"userpage"},
  { component: GeheimComponent, path: "secret"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
