import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import { WeaponListComponent } from './feature/view/weapon-list/weapon-list.component';
import { HomepageComponent } from './feature/view/homepage/homepage.component';
import { RegistrationComponent } from './feature/view/registration/registration.component';
import { GeheimComponent } from './feature/view/geheim/geheim.component';
import { UserpageComponent } from './feature/view/userpage/userpage.component';
import {MatTableModule} from '@angular/material/table';

const matModules = [MatTableModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatCardModule, MatGridListModule];

@NgModule({
  declarations: [
    AppComponent,
    WeaponListComponent,
    HomepageComponent,
    RegistrationComponent,
    GeheimComponent,
    UserpageComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...matModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
