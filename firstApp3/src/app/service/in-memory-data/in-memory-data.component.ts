import { Component } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from 'src/app/models/student';


@Component({
  selector: 'app-in-memory-data',
  templateUrl: './in-memory-data.component.html',
  styleUrls: ['./in-memory-data.component.css']
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      {id: 0, name: 'Имя', surname: 'Фамилия'},
      {id: 1, name: 'Имя 1', surname: 'Фамилия 1'},
      {id: 2, name: 'Имя 2', surname: 'Фамилия 2'}
    ];
    return {students};
  }

  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id ?
student.id : 0)) + 1 : 11;
  }
}

