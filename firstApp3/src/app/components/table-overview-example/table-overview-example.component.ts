import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { DialogEditWrapperComponent } from './../student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { BaseServiceService } from './../../service/base-service.service';
import { Student } from './../../models/student';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface UserData {
  id: string;
  name: string;
  surname: string;
}

@Component({
  selector: 'table-overview-example.',
  styleUrls: ['table-overview-example.component.css'],
  templateUrl: 'table-overview-example.component.html',
})

export class TableOverviewExample implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'surname'];
  dataSource: MatTableDataSource<Student>;
  students: Student[];
  editingStudent: Student;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer,
    private baseService: BaseServiceService,
    public dialog: MatDialog) {
this.students = []
this.dataSource = new MatTableDataSource<Student>()
this.editingStudent = new Student();
  }
  ngOnInit() {
    console.log("TableOverviewExample");
    this.baseService.getAllStudents().subscribe(data => { this.dataSource.data = data;
      console.log (this.students)});
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addStudent(): void {
    this.baseService.addNewStudent(this.editingStudent);
    this.editingStudent = new Student();
    }

  addNewStudent() {
    const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent, {
      width: '400px',
      data: null
    });
    dialogAddingNewStudent.afterClosed().subscribe((result: Student) => {
      if(result != null) {
        console.log("adding new student: " + result.name);
        this.baseService.addNewStudent(result).subscribe(k=>
          this.baseService.getAllStudents().subscribe(data => this.dataSource.data = data) );
      }
    });
  }
}
