import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {
  price = 22.33;
  fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi"]
  currDate = new Date();
  num = 0.8178;
  myjson = {
    "id": 100, "name": "Sachin R Tendulkar", "address": {
      "street": "some street",
      "city": "Mumbai"
    },
    "contact": 1234567890
  };
  firstName = "Virat";
  lastName = "Kohli";
}
