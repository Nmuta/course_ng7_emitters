import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() eventi = new EventEmitter<any>();
  @Output() evento = new EventEmitter<boolean>();

  constructor() { }
  ref:any; 

  ngOnInit() {
  }

  ngAfterViewInit(){
   
  }

  start(){
    this.ref = setInterval(()=>{
      this.runTimer();
    }, 1000);
  }

  stop(){
    clearInterval(this.ref);
    this.evento.emit(true);
  }

  runTimer(){
    this.eventi.emit(this.ref);
  }

}
