import { createReducer } from "@ngrx/store";
import { on } from "@ngrx/store";
import { AddBook, RemoveBook } from "./book.actions";
import { Book } from "../models/book";

export const initialState: Book[] = [];
    //removed ReadonlyArray<Book[]>, meaning initialized initiateState to Book array

export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state, {id, title, author}) => [...state, {id, title, author}]),
        //we will take current state and add new book at end of current state (book array) 
    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id))
        //we will take current state and book id of book to be deleted 
        // and return state and filter which will return new array ie. new state without book we deleted 
);
