import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook = createAction('[Book] Add Book', props<Book>());
export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>());


