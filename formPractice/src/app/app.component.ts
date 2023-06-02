import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formPractice';
  data!:Observable<number>
  myArray: number[] = [];
  errors!: boolean;
  finished!: boolean;
  fetchData():void{
    this.data=new Observable(observer=>{
      setTimeout(()=>observer.next(109),1000)
      setTimeout(()=>observer.next(110),2000)
      setTimeout(()=>observer.complete(),3000)
    });
    this.data.subscribe((value)=> this.myArray.push(value),
    errors=> this.errors=true,
    ()=>this.finished=true);

  }

  sortoption: string = "";
  productsList: any = [
    { productName: 'Samsung J7', price: 18000 },
    { productName: 'Apple iPhone 6S', price: 60000 },
    { productName: 'Lenovo K5 Note', price: 10000 },
    { productName: 'Nokia 6', price: 15000 },
    { productName: 'Vivo V5 Plus', price: 26000 }
  ];
  //numbers = [1, 2, 3, 4, 5];
  oddnumbers=[1,3,5];
  evennumbers=[2,4];
  onlyOdd = false;
  message='welcome this is from the custom attribute;'
}
