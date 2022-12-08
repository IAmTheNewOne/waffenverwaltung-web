import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user-model';
import { RestClientService } from 'src/app/core/services/rest-client.service';
import { RegistrationForm } from '../registration/interfaces/registration-form';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit {

  hideForm: boolean = true;
  dataSource: User[] = [];
  displayedColumns: string[] = ['email', 'password'];
  hide: boolean = true;
  registrationForm = new FormGroup<RegistrationForm>({
    email: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true}),
  });
  
  constructor(private restClient: RestClientService, private router: Router, ) {
    this.getAllUser();
   }

  ngOnInit(): void {
  }

  public getAllUser() {
    this.restClient.getAllUser()
    .subscribe(userList => {
      console.log(userList);
      this.dataSource = userList;
    })
  }

  submitRegistration() {
    this.restClient
    .registerUser(this.registrationForm)
    .subscribe(user => {
      alert("User: " + user.email + " was created!");
      this.hideForm = true;
      this.registrationForm.reset;
      this.getAllUser();
    });
  }
}
