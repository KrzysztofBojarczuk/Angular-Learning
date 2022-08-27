import { Component, OnInit } from '@angular/core';

interface Car {
  id: number;
  name: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  value: string = '';

  constructor() {}

  cars: Car[] = [
    { id: 1, name: 'Car 1' },
    { id: 2, name: 'Car 2' },
    { id: 3, name: 'Car 3' },
  ];

  handleClick(value: any) {
    console.log(value);
  }

  ngOnInit(): void {}
}
