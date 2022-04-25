import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userType:string | undefined;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
loginForm=new FormGroup({
  userName:new FormControl(),
  password:new FormControl(),
  type:new FormControl()
})

get userName(){
  return this.loginForm.get('userName');
}
get password(){
  return this.loginForm.get('password');
}
get type(){
  return this.loginForm.get('type');
}
onSubmit(){
  alert(this.loginForm.get('userName')?.value+"\t"+this.loginForm.get('password')?.value+"\t"+this.loginForm.get('type')?.value);
console.log(this.loginForm.value);
this.userType=this.loginForm.get('type')?.value;
if(this.userType=="admin"){
  alert("Welcome Admin Home Page");
}else if(this.userType=="user"){
alert("Welcome to User Home Page");
}else{
  alert("Please enter valid UserName/Password");
}
}
}
