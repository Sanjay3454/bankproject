import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="your perfect banking partner"
  data1="Enter your ac number"

  acno:any 
  psw:any 
  // userDetails:any={
  //   1000:{username:"anu",acno:1000,password:"abc123",balance:0},
  //   1001:{username:"venu",acno:1001,password:"abc123",balance:0},
  //   1002:{username:"thanu",acno:1002,password:"abc123",balance:0},
  //   1003:{username:"manu",acno:1003,password:"abc123",balance:0}
  // }
  constructor(private router:Router,private ds:DataService){}
  
  login(){
    var acnum=this.acno
    var psw=this.psw
    const result =this.ds.login(acnum,psw)
  

    if(result){
      alert("login success")
        this.router.navigateByUrl("dashboard")
        //redirection 
       
        
      }
      else{
        alert("incorrect acno or password")
      }
  }
 

//   acnoChange(event:any){
//     // console.log(event.target.value);
//     this.acno=event.target.value
//     // console.log(this.acno);
    

//   }
//   passChange(event:any){
//     // console.log(event);
//     this.psw=event.target.value
//     // console.log(this.psw);
    
    
//   }




// login(acnum:any,psw:any){
//       var acnum=acnum.value
//       var psw=psw.value
//       var userDetails=this.userDetails
  
//       if(acnum in userDetails){
//         if(psw==userDetails[acnum]["password"]){
//           alert("login success")
//         }
//         else{
//           alert("incorrect password")
//         }
//     }
//     else{
//       alert("incorrect acno")
//     }
//   }



}


