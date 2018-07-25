import { Component, OnInit } from '@angular/core';
import { Switchboard } from './../switchboard';

@Component({
  selector: 'app-switchboard',
  templateUrl: './switchboard.component.html',
  styleUrls: ['./switchboard.component.css']
})
export class SwitchboardComponent implements OnInit {
  switches: Array<Switchboard>;

  boxes: Array<any>;
  constructor() {
    this.switches=[];
    this.switches.push(new Switchboard('red', false));
    this.boxes = [];
    for(let i = 0; i <= 10; i++){
      this.boxes.push(new Switchboard('red', false))
    }
    console.log(this.boxes)
    console.log(this.switches)
  }
  onButtonClick(index){
    if(this.boxes[index].color=='red'){
      this.boxes[index].color = 'green';
      this.switches[0].color = 'green';
    }
    else if(this.boxes[index].color=='green'){
      this.boxes[index].color = 'red';
      this.switches[0].color = 'red';

    }

  }
  ngOnInit() {
  }

}
