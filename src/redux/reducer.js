import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
