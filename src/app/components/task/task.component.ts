import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  value: string = '';

  constructor() {}

  handleClick(value: any) {
    console.log(value);
  }

  ngOnInit(): void {}
}
