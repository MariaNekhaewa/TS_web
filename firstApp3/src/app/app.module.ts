import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEditorComponent } from "./components/student-editor/student-editor.component";
import { TableStudentsComponent } from './components/table-students/table-students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogEditWrapperComponent } from './components/student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component'
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './service/in-memory-data/in-memory-data.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TableOverviewExample } from './components/table-overview-example/table-overview-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
import { Routes } from '@angular/router';




const appRoutes: Routes = [
  {path: 'home', component: TableOverviewExample},
  {path: 'finish', component: FinishComponent},
  {path: '', component: StartComponent},
]

@NgModule({
  declarations: [
    TableOverviewExample,
    AppComponent,
    StudentEditorComponent,
    TableStudentsComponent,
    DialogEditWrapperComponent,
    StartComponent,
    FinishComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes),
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )



  ],
  providers: [],
  bootstrap: [AppComponent, TableOverviewExample],


})
export class AppModule { }
