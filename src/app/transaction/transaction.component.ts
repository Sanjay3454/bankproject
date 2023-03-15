import { DataService } from './../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  transactionArray:any

  constructor(private ds:DataService){
  this.transactionArray=  this.ds.getTransaction(this.ds.currentAcno)

  console.log(this.transactionArray);
  


  }

}
