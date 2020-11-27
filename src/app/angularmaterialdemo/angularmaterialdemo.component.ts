import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularmaterialdemo',
  templateUrl: './angularmaterialdemo.component.html',
  styleUrls: ['./angularmaterialdemo.component.css'],
})
export class AngularmaterialdemoComponent implements OnInit {
  namesArr: string[] = [
    'jinal',
    'jaydeep',
    'sanjana',
    'bhautik',
    'riya',
    'fenil',
  ];
  fillteredArray: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.fillteredArray = this.namesArr;
  }
  onSearch(value: string) {
    if (value != '') {
      const val = value.toLowerCase();
      this.fillteredArray = this.namesArr.filter(
        (x) => x.toLowerCase().indexOf(val) == 0
      );
    } else {
      this.fillteredArray = this.namesArr;
    }
  }
}
