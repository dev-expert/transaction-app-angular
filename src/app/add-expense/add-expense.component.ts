import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

  checkoutForm: FormGroup;
  submitted = false;
  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      trans_desc: '',
      trans_type: ['', Validators.required],
      trans_amount: ['', Validators.required],
      trans_date: new Date
    });

  }

  ngOnInit(): void {

  }
  // convenience getter for easy access to form fields
  get f() { return this.checkoutForm.controls; }

  onSubmit(customerData) {

    this.submitted = true;
    // stop here if form is invalid
    if (this.checkoutForm.invalid) {
      return;
  }
    let creditamount=0;
    let debitamount=0;
    if (customerData.trans_type == 'credit') {
      creditamount = customerData.trans_amount;
  }
  else {
      debitamount = customerData.trans_amount;
  }
    let data = {
      trans_desc: customerData.trans_desc,
      trans_type: customerData.trans_type,
      trans_type_debitamount: debitamount,
      trans_type_creditamount: creditamount,
      trans_date: new Date()
    }
    this.dataService.sendPostRequest(data).subscribe(
      res => {
        console.log(res);
      }
    );
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

  onReset() {
    this.submitted = false;
    this.checkoutForm.reset();
}

}
