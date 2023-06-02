import { Component, OnInit } from '@angular/core';
import { interval , observable, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private subscription!:Subscription;
    constructor(){}





  ngOnInit(): void {
  //  interval(1000).subscribe(count=>{
  //   console.log(count);

  //  });

    const custom=Observable.create((observer:any)=>{
      let c=0;
      setInterval(()=>{
        observer.next(c);
        if(c==2){
          observer.complete();
        }
        if(c>3){
          observer.error(new Error('count is greater than 3'));
        }
        c++;
      },1000)
    });
    this.subscription=custom.subscribe((data: any)=>{
      console.log(data);

    },(error: { message: any; })=>{
      alert(error.message)
    },()=>{
      console.log('Completed');

    });

  }

}
