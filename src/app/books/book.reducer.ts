import { createReducer } from "@ngrx/store";
import { on } from "@ngrx/store";
import { AddBook, AddBookFailure, AddBookSuccess, RemoveBook } from "./book.actions";
import { Book } from "../models/book";
import { state } from "@angular/animations";

export const initialState: Book[] = [];
    //removed ReadonlyArray<Book[]>, meaning initialized initiateState to Book array

export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state, {id, title, author}) => [...state, {id, title, author}]),
        //we will take current state and add new book at end of current state (book array)
    
    //changes with @NgRx/effects
    on(AddBook, (state) => { return state }),    
    on(AddBookSuccess, (state, {id, title, author}) => [...state, {id, title, author}]),
    on(AddBookFailure, (state, {error}) => {
        console.error(error);
        return state;
    }),

    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id))
        //we will take current state and book id of book to be deleted 
        // and return state and filter which will return new array ie. new state without book we deleted 
);
