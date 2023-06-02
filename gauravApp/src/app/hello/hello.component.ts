import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  public names:"gaurav";
  couseName: string="Angular";
  constructor() { }

  ngOnInit() {
  }


  onClick(){
    this.couseName="TypeScript";
  }
}
