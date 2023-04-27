import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

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
    acno: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    uname: ['',[Validators.required,Validators.pattern('[a-zA-Z]+')]] ,
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
    
    
  })

  register() {
 var acno = this.registerForm.value.acno
 var uname= this.registerForm.value.uname
 var psw = this.registerForm.value.psw 
if(this.registerForm.valid){
this.ds.register(acno,uname,psw).subscribe((result:any)=>{
alert(result.message)
 this.router.navigateByUrl("")
},
result=>{
  alert(result.error.message)
}
)
}
else{
  alert("invalid form")
}
  }
}
//   if(result){
//    alert('registered')
//    this.router.navigateByUrl("")
   
//   }
//   else{
//    alert('user already presnt')
//   }
  
 

// }

// else{
//   alert('invalid form')
// }





 
