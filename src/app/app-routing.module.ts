import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/expenslists', pathMatch: 'full' },
  {path: 'expenses' , component: AddExpenseComponent},
  {path: 'expenslists' , component: ExpenseListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
