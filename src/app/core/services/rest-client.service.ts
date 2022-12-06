import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { RouteModel } from '../model/route-model';
import { Weapon } from '../model/weapon';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {
  API: string = "http://localhost:8080";
  
  constructor(private http: HttpClient) { }

  routeList: Array<RouteModel> = []

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



