import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorktestComponent } from './worktest/worktest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//WORKTEST All MATERIAL IMPORT GIVEN BELOW
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
// THIS IS FOR BINDING WITH DIALOG INPUT AND ARTICLE LIST
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    WorktestComponent,
    DialogExampleComponent,
    
    
  ],

  entryComponents: [DialogExampleComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,

    FormsModule

  ],

  exports:[
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
