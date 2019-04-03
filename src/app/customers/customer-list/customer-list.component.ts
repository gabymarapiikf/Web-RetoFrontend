import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  list: Customer[];
  displayedColumns: string[] = ['id', 'name', 'lastname', 'age', 'birthdate'];

  constructor(
    private service: CustomerService,
  ) { }

  ngOnInit() {
    this.service.getCustomers().subscribe(actionArray => {
      this.list = actionArray.map((item, index) => {
        return {
          id: String(index + 1),
          ...item.payload.doc.data(),
        } as Customer;
      })
    })
  }

  calculateImp(y) {
    return +y % 2 === 0 ? false : true;
  }

  convertFormat(a){
    const getDate = new Date(a.seconds * 1000);
    return getDate.toLocaleDateString();
  }

}
