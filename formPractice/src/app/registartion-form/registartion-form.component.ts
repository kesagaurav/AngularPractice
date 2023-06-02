import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators , FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registartion-form',
  templateUrl: './registartion-form.component.html',
  styleUrls: ['./registartion-form.component.css']
})
export class RegistartionFormComponent implements OnInit {

  registerForm!:FormGroup;
  submitted!:boolean
  constructor(private FormBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.registerForm=this.FormBuilder.group({
      firstName: [null,{updateOn:'blur',Validators:[Validators.required]}],
      lastName:['',[Validators.required]],
      address: this.FormBuilder.group({
        street:[],
        city:[],
        zip:[]
      }),
      email:['',Validators.required,this.verifyEmail]
    })
  }

   verifyEmail(c:FormControl):any {
    let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return EMAIL_REGEXP.test(c.value) ? null : {
      emailInvalid: {
        message: "Invalid Format!"
      }
    };
  }

  onSubmit(){
    console.log(this.registerForm);

  }

}
