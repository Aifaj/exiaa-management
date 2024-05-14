import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { DisplayService } from './display.service';
import { Student } from '../model/student';
import {String} from "typescript-string-operations";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public student: Student;
 // [x: string]: any;
  //public static readonly NodeAddStudentByTeacher = 'student/addStudentByTeacher';
  public static readonly NodeAddStudent = 'student/addStudent';
  public static readonly NodeStudentById = 'student/getStudentById?studentId{0}';
  public static readonly NodeAllReligion = 'religion/getAllReligion';
  public static readonly NodeAllCategory = 'section/getAllCategories';

  constructor(private restService: RestService, private displayService: DisplayService) { }

  // async addStudent(student) {
  //   try {
  //     const res: any = await this.restService.post(StudentService.NodeAddStudent, student);
  //     await this.readStudent(this.student.studentId);
  //     return res;
  //   } catch (e) {
  //     this.displayService.toast(e);
  //   }
  // }

  public async addStudent(student: any) {
    console.log(student);
    try {
      const result = await this.restService.postFormData(StudentService.NodeAddStudent, student);
      console.log(result);
      return Promise.resolve(result.data);
    } catch (e) {
      return Promise.reject(e);
    }
  }


  public async readStudent(studentId: any): Promise<any> {
    try {
      const student = await this.restService.get(String.Format(StudentService.NodeStudentById, studentId));
      await this.addStudent(student);
      console.log(student)
      this.publishStudent();
      return Promise.resolve(student);
    } catch (e) {
      return Promise.reject(e);
    }

  }
  publishStudent() {
    throw new Error('Method not implemented.');
  }

  
  async getAllReligion() {
    try {
      const res: any = await this.restService.get(StudentService.NodeAllReligion);
      // await this.readStudent(this.student.studentId);
      return res;
    } catch (e) {
      this.displayService.toast(e);
    }
  }

  async getAllCategory() {
    try {
      const res: any = await this.restService.get(StudentService.NodeAllCategory);
      return res;
    } catch (e) {
      this.displayService.toast(e);
    }
  }

 

}
