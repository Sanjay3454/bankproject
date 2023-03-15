import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  acno: any;
  uname: any;
  psw: any;

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder){}

  //model for register form 

  registerForm=this.fb.group({
    acno: [''],
    uname: [''],
    psw: ['']
    
  })

  register() {
 var acno = this.acno
 var uname= this.uname
 var psw = this.psw 
 


 const result = this.ds.register(acno,uname,psw)
 if(result){
  alert('registered')
  this.router.navigateByUrl("")
  
 }
 else{
  alert('user already presnt')
 }
 



  }
}
