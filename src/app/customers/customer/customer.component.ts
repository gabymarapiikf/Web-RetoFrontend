import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { NgForm, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Output() ngSubmit = new EventEmitter();
  public customer = {
    id: null,
    name: null,
    lastname: null,
    age: null,
    birthdate: null,
  };

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
    }
  }

  validateCustomerInformation(form: NgForm) {
    const data = form.value;
    this.firestore.collection('customers').add(data);
    this.resetForm(form);
  }

}
