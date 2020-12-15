import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-popupdemo',
  templateUrl: './popupdemo.component.html',
  styleUrls: ['./popupdemo.component.css'],
})
export class PopupdemoComponent implements OnInit {
  constructor(
    public dialogref: MatDialogRef<PopupdemoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}
  onClose() {
    this.data = 'sanjana';
    this.dialogref.close();
  }
}
