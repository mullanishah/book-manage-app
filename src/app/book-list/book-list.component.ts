import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books$ : Observable<Book[]>;

  constructor(private store: Store<AppState>) {   
      //replaced {books: Book[]} with AppState, so that value is not hard-coded
    this.books$ = store.pipe(select('book'));
      //replaced books with book, cus of type safety
  }

  //dispatch == starting an action
  addBook(id: string, title: string, author: string){

    this.store.dispatch(AddBook({id, title, author}));
  }

  removeBook(bookId: string){
    alert("id:" + bookId);
    this.store.dispatch(RemoveBook({bookId}));
  }
}
