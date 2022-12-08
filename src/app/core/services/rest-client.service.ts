import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { RegistrationForm } from 'src/app/feature/view/registration/interfaces/registration-form';
import { RouteModel } from '../model/route-model';
import { User } from '../model/user-model';
import { Weapon } from '../model/weapon';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {
  API: string = "http://localhost:8080";
  routeList: Array<RouteModel> = []

  constructor(private http: HttpClient) { }

  public getNavigationRoutes(): Observable<RouteModel[]>
  {
    return this.http
    .get<RouteModel[]>(`${this.API}/navigation/navigation`)
    .pipe(
      retry(1), 
      catchError(this.handleError)
      );
  }
  
  public getWeapons(): Observable<Weapon[]>
  {  
    return this.http
    .get<Weapon[]>(`${this.API}/weapon/weapons`)
    .pipe(
      retry(1), 
      catchError(this.handleError)
      );
  }

  public getAllUser(): Observable<User[]>
  {  
    return this.http
    .get<User[]>(`${this.API}/user/all-users`)
    .pipe(
      retry(1), 
      catchError(this.handleError)
      );
  }
  
  public registerUser(registrationForm: FormGroup<RegistrationForm>): Observable<User> {
    return this.http
    .post<User>(`${this.API}/user/add-user`, registrationForm.value)
    .pipe(
      retry(1), 
      catchError(this.handleError)
      );
  }

  // Error handling
  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}



