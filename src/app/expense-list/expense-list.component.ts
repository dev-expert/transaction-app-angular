import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {

  expenses = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getData().subscribe((data: any[])=>{
      console.log(data);
      this.expenses = data;
    })  
  }

}
