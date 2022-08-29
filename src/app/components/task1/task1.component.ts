import { Component, OnInit } from '@angular/core';


interface Car {
  id:number;
  name: string;
  active: boolean
}

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  name: string = "";
  constructor() {
    
  }



handleChange(event: any) {
  this.name = event.target.value;



}

  ngOnInit(): void {
  }

}
