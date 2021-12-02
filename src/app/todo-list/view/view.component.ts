import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  readioSelected: any;
  showcontent: any;

  usrn: string = '';

  showContent() {
    this.showcontent = this.readioSelected;
  }
  constructor() {}

  ngOnInit(): void {}
}
