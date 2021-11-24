import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  fruits = ['apple', 'mango', 'orange'];
  constructor() {}

  ngOnInit(): void {}
  addFruit(item: string) {
    this.fruits.push(item);
  }
}
