import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(
    private service: CustomerService
  ) { }
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    form.resetForm();
    this.service.formData = {
      id: null,
      name: null,
      lastname: null,
      age: null,
      birthdate: null,
    }
  }

  validateCustomerInformation() {

  }

}
