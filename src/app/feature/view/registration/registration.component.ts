import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestClientService } from 'src/app/core/services/rest-client.service';
import { RegistrationForm } from './interfaces/registration-form';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide: boolean = true;
  registrationForm = new FormGroup<RegistrationForm>({
    email: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true}),
  });
  
  constructor(private router: Router, private restClient: RestClientService) { }

  ngOnInit(): void {
  }

  abortRegistration() {
    this.router.navigate(["/"]);
  }

  submitRegistration() {
    this.restClient
    .registerUser(this.registrationForm)
    .subscribe(successMessage => {
      alert(successMessage)
    });
  }
}
