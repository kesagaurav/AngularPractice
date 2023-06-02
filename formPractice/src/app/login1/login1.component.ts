import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  registerForm!:FormGroup;
  fontcolumn="col-xs-3";
  color="blue";
  border='1px solid green';
  inputtext="blue";
  constructor(private fb:FormBuilder){
    console.log(fb);

  }

  isBordered=true;



  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      address:this.fb.group({
        street:[],
        city:[],
        zip:[]
      })
    })

  }

}
