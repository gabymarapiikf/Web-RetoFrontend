import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTableModule,
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
