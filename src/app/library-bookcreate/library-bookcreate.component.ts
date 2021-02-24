import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BookServiceService } from '../service/book-service.service';
export class College{
  public collgeid : number;
  public collegeName : string;
  public address : string;
  public orientation : string;
  public college_type : string;
}

export class Book{

  constructor( public bookName : string,
    public authorName : string,
    public bookNumber : number,
    public courseName : string,
    public publicationDate : string,
    public bookPrice : number,
    public bookid : number,
    public college : College
  ){
    
  }
}
@Component({
  selector: 'app-library-bookcreate',
  templateUrl: './library-bookcreate.component.html',
  styleUrls: ['./library-bookcreate.component.css']
})
export class LibraryBookcreateComponent implements OnInit {
   book: Book;
   booksArrsy: Book[]
  displayedLibColumns: string[] = ['authorName', 'bookName', 'bookPrice', 'courseName','bookNumber','publicationDate']
   dataLibSource =new MatTableDataSource<Book>();
   isResponseSuccess:boolean
  errorMessage:string
  constructor(private bookService : BookServiceService) { }

  ngOnInit() {
    this.book = new Book('','',1,'','',null,1,new College);
    
  }
  saveBooks(){
    console.log(this.book.bookName+"COMPO");
        this.bookService.saveAllStudents(this.book).subscribe(
           response=>this.handleSuccess(response)
          
         );
       
      }
     handleSuccess(response){
       this.book = response
       //this.dataLibSource = [this.book]
       //this.dataLibSource.data=response as Book[];
       //this.dataLibSource.data = response as Book[];
    
       this.isResponseSuccess = true
       this.showTable();
       console.log(this.dataLibSource.data+"HANDLSUCCESS of Component")
      }
       handleError(error){
    
       this.errorMessage = error
        this.isResponseSuccess = false
       }
       showTable(){
        let def =this.bookService.saveAllStudents(this.book);
        def.subscribe
     
       }
       populateData(data){
            this.dataLibSource = data;
       }
}
