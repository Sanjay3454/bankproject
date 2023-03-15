import { DataService } from './../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent   {
user:any

acno:any
psw:any
amnt:any

acno1:any
psw1:any
amnt1:any


  constructor(private ds:DataService){
    //access data from data service and store in a variable 
    this.user=this.ds.currentUser 
  }



  
  deposit(){
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt
    const result=this.ds.deposit(acno,psw,amnt)
    if(result){
      alert(`your ac has been debited with amount ${amnt} 
      and the available balance is ${result}`)
    }
    else{
      alert("incurrect acno or password")
    }
  }
  withdraw(){
    var acno1=this.acno1
    var psw1=this.psw1
  
    var amnt=this.amnt1
    const result=this.ds.withdraw(acno1,psw1,amnt)
  if(result){
    alert(`your ac has been dibited with amount ${amnt} available balance is ${result}`)
  }
  else{
    alert('incorrect acno or password')
  }
  }
  
}
