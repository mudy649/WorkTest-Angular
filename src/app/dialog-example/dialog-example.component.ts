import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../dialog-example/dialogdata'

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {


  // public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  // @Inject(MAT_DIALOG_DATA) public data: DialogDat
  constructor(public dialogRef: MatDialogRef <DialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}
