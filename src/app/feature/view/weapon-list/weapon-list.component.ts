import { Component, OnInit } from '@angular/core';
import { Weapon } from 'src/app/core/model/weapon';
import { RestClientService } from 'src/app/core/services/rest-client.service';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss']
})
export class WeaponListComponent implements OnInit {

  weaponList: Array<Weapon> = [];

  constructor(private restClient: RestClientService) { 
    this.restClient.getWeapons().subscribe(data => {this.weaponList = data});
  }

  ngOnInit(): void {
  }

}

