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

  car: string ="BMW";
  constructor() { 

    this.car;
  }


  cars: Car[] = [
    { id: 1, name: 'Ter Stegen', active: false },
    { id: 2, name: 'Ter Adam', active: false },
    { id: 3, name: 'Ter Adam', active: false }


  ];

  name: string = '';
  handleClick(value: any){
    console.log(value);

  }
  

  ngOnInit(): void {
  }

}
