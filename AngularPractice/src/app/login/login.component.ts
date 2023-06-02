import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm!:FormGroup;
  submitted=false;

  constructor(private fb:FormBuilder,private router:Router) {

  }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstName:['',[Validators.required,this.validateFirstName]],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,this.validatePhone]]
    })
  }

  validateFirstName(c:FormControl):any{
    let FIRST_REGEX=/^[a-z]{6}$/;
    return FIRST_REGEX.test(c.value)?null:{
      firstisInvalid:{
      message: 'Invalid Format!'
      }
    }
    return FIRST_REGEX;
  }

  validatePhone(c:FormControl):any{
    let FIRST_REGEX=/^[0-9]{10}$/;
    return FIRST_REGEX.test(c.value)?null:{
      phoneisInvalid:{
      message: 'Invalid Number Format!'
      }
    }
    return FIRST_REGEX;
  }

  onSubmit():void{

    this.router.navigate(['/logout']);
  }

}
