import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { PopupdemoComponent } from '../popupdemo/popupdemo.component';
@Component({
  selector: 'app-angularmaterialdemo',
  templateUrl: './angularmaterialdemo.component.html',
  styleUrls: ['./angularmaterialdemo.component.css'],
})
export class AngularmaterialdemoComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
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
  matchipArray: string[] = ['jinal'];
  fillteredArray: string[] = [];
  constructor(private dialog: MatDialog) {}

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
  onSearch1(value: string) {
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
  remove1(item) {
    const index = this.matchipArray.indexOf(item);

    if (index >= 0) {
      this.matchipArray.splice(index, 1);
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
  add1(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.matchipArray.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.matchipArray.push(event.option.viewValue);
    this.nameInput.nativeElement.value = '';
  }

  openDialog() {
    const abc = this.dialog.open(PopupdemoComponent, {
      data: this.namesArr[0],
    });

    abc.afterClosed().subscribe((x) => {
      console.log(x);
    });
  }
}
