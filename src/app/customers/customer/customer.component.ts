import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(
    private service: CustomerService,
    private firestore: AngularFirestore
  ) { }
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.resetForm();
      this.service.formData = {
        id: null,
        name: null,
        lastname: null,
        age: null,
        birthdate: null,
      }
    }
  }

  validateCustomerInformation(form: NgForm) {
    let data = form.value;
    this.firestore.collection('customers').add(data);
    this.resetForm(form);
  }

}
