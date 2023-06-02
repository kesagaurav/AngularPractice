import { Component } from '@angular/core';
import { PipeDemoPipe } from '../pipe-demo.pipe';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  name="gaurav";
  date=new Date();
  price="2000.90";
  json={
    "id":100,
    "name":"sachin",
    "address":{
      "street":"kareembad road",
      "flarno":"507",
      "zip":"506002"
    }
  }
  value='';
  number=34;
  private pipe!:PipeDemoPipe
  constructor() {

  }





}
