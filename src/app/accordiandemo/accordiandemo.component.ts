import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from './book';
import { SnackbardemocmpComponent } from './snackbardemocmp/snackbardemocmp.component';
@Component({
  selector: 'app-accordiandemo',
  templateUrl: './accordiandemo.component.html',
  styleUrls: ['./accordiandemo.component.css'],
})
export class AccordiandemoComponent implements OnInit {
  step = 0;

  booksarr: Book[] = [
    new Book('ansi c', 'sanjana ni fav book che', '10', '123123131'),
    new Book(
      'ansi c++',
      'sanjana ni fav book nathi',
      '100',
      '12sdfasdf3123131'
    ),
    new Book('DBMS', 'Gadhavi ni fav book che', '1000', '1231fgdsfg23131'),
    new Book('Math', 'Riya ni fav book che', '20', '12312313sdfasdf1'),
  ];
  setStep(index: number) {
    this.step = index;
  }
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  OnClick(val) {
    this._snackBar.open(val, 'Close Now', {
      duration: 2000,
      horizontalPosition: 'left',
      verticalPosition: 'top',
    });
  }
  onToastClick() {
    this._snackBar.openFromComponent(SnackbardemocmpComponent, {
      duration: 5000,
    });
  }
}
