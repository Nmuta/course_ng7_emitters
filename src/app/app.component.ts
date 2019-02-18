import { Component } from '@angular/core';
import {OddComponent} from './odd/odd.component';
import {EvenComponent} from './even/even.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count:number = 0;
  odds:number[] = [];
  evens:number[] = [];

  getTime(event:any){
    this.count++;
    if(this.count%2==0){
      this.evens.push(this.count);
    } else {
      this.odds.push(this.count);
    }
  }

  stopTime(event:any){
    this.count=0;
    this.odds = [];
    this.evens = [];
  }
}
