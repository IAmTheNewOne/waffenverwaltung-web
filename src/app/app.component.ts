import { Component } from '@angular/core';
import { RouteModel } from './core/model/route-model';
import { RestClientService } from './core/services/rest-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routeList: Array<RouteModel> = []

  constructor(private restClient: RestClientService)
  {
    this.restClient.getNavigationRoutes()
    .subscribe(data => this.routeList=data);
  }
}