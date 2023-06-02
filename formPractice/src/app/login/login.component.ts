import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  registerform!:FormGroup;
  submitted=false;

  constructor(private form:FormBuilder){}

  ngOnInit(): void {
    this.registerform=this.form.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phone:['',Validators.required,this.validatePhone],
      email:['',Validators.required],
      password:['',Validators.required,Validators.minLength(6),this.validatePassowrd]
    });
  }


validatePhone(c:FormControl){
  let regex=/^[0-9]{10}$/;
 return regex.test(c.value)? null: {
    phoneisInvalid:{
      message:'Invalid phone!'

  }
  }
}


validatePassowrd(c:FormControl) {
  let legex=/^[a-zA-Z]{3}-[0-9]{3}$/;
  return legex.test(c.value)? null: {
    passwordisInvalid:{
      message:'Invalid password!'

  }
  }
}



}
