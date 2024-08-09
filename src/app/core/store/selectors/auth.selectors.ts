import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAuth } from '../../interfaces/auth.interface';

export const selectAuth = createFeatureSelector<IAuth>('auth');

// export const selectCollectionState = createFeatureSelector<
//   ReadonlyArray<string>
// >('collection');

// export const selectBookCollection = createSelector(
//   selectBooks,
//   selectCollectionState,
//   (books, collection) => {
//     return collection.map((id) => books.find((book) => book.id === id)!);
//   }
// );
