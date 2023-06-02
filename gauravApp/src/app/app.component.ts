import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFrench from '@angular/common/locales/fr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gauravApp';
  isAutenticated!:boolean;
  submitted:boolean=false;
  userName:string;
onSubmit(name:string,password:string){
  this.submitted=true;
  this.userName=name;
  if(name==="admin" && password==="admin"){
    this.isAutenticated=true;
  }else{
    this.isAutenticated=false;
  }
}

courses:any[] = [
  { id: 1, name: "TypeScript" },
  { id: 2, name: "Angular" },
  { id: 3, name: "Node JS" },
  { id: 1, name: "TypeScript" }
];

choice:0
nextChoice(){
  this.choice++;
}

title1 = 'product details';
productCode = 'PROD_P001';
productName = 'Apple MPTT2 MacBook Pro';
productPrice = 217021;
purchaseDate = '1/17/2018';
productTax = '0.1';
productRating = 4.92;



  sortoption: string = '';
  productsList: any = [
    { productName: 'Samsung J7', price: 18000 },
    { productName: 'Apple iPhone 6S', price: 60000 },
    { productName: 'Lenovo K5 Note', price: 10000 },
    { productName: 'Nokia 6', price: 15000 },
    { productName: 'Vivo V5 Plus', price: 26000 },
  ];



name1 : string="angular";

name : string ="Angular";

colorName:'red';
color:'yellow';
}
