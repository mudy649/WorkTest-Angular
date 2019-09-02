import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DialogData} from '../dialog-example/dialogdata'

@Component({
  selector: 'app-worktest',
  templateUrl: './worktest.component.html',
  styleUrls: ['./worktest.component.css']
})
export class WorktestComponent implements OnInit {

  public name= "";
  constructor(public dialog: MatDialog) { }

  openDialog(){
    let dialogRef = this.dialog.open(DialogExampleComponent,{
      data: {name: this.name}
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog result: ${result}`);
      this.name = result;
      console.log(this.name);
    });
  }

  
  ngOnInit() {
  }

}
