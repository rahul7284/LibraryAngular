import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../library-bookcreate/library-bookcreate.component';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }
  book : Book
  saveAllStudents(book){
    console.log("service"+book);
      return this.http.post<Book>(`http://localhost:8080/book`,book);
       //console.log("customised Welcome")
     }
     setData(Buk){
      this.book = Buk;
    }
}
