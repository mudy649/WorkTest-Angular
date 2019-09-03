import { Component, OnInit , Inject, Optional} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../dialog-example/dialogdata'



@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  action:string;
  local_data:any;
  // public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  // @Inject(MAT_DIALOG_DATA) public data: DialogDat
  constructor(public dialogRef: MatDialogRef <DialogExampleComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
    }

    doAction(){
      this.dialogRef.close({event:this.action,data:this.local_data});
    }
  ngOnInit() {
  }

}
