import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog , MatTable  } from '@angular/material';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DialogData} from '../dialog-example/dialogdata'



export interface UsersData {
  name: string;
  id: number;
}
 
const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Artificial Intelligence'},
  {id: 1560608796014, name: 'Machine Learning'},
  {id: 1560608787815, name: 'Robotic Process Automation'},
  {id: 1560608805101, name: 'Blockchain'},
  {id: 1560608769632, name: 'Artificial Intelligence'},
  {id: 1560608796014, name: 'Machine Learning'},
  {id: 1560608787815, name: 'Robotic Process Automation'},
  {id: 1560608805101, name: 'Blockchain'}
];

@Component({
  selector: 'app-worktest',
  templateUrl: './worktest.component.html',
  styleUrls: ['./worktest.component.css']
})
export class WorktestComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  // public name= "";
  constructor(public dialog: MatDialog) { }

  openDialog(action,obj){
    obj.action = action;
    let dialogRef = this.dialog.open(DialogExampleComponent,{
      data: obj
      // data: {name: this.name}
    });
    dialogRef.afterClosed().subscribe(result =>{
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }
      console.log(`Dialog result: ${result}`);
      // this.name = result;
      // console.log(this.name);
    });
  }
  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name
    });
    this.table.renderRows();
    
  }
  
  ngOnInit() {
  }

}
