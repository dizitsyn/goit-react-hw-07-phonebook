import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const {
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  filterContact,
} = actions;

const items = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [delContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
