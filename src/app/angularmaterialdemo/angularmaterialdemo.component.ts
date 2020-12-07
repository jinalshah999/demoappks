import { Component, OnInit } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
@Component({
  selector: 'app-angularmaterialdemo',
  templateUrl: './angularmaterialdemo.component.html',
  styleUrls: ['./angularmaterialdemo.component.css'],
})
export class AngularmaterialdemoComponent implements OnInit {
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
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
  remove(item) {
    const index = this.namesArr.indexOf(item);

    if (index >= 0) {
      this.namesArr.splice(index, 1);
    }
  }
  add(event) {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.namesArr.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
}
