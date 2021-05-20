import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("phoneBook/addContactsRequest");
const addContactSuccess = createAction("phoneBook/addContactsSuccess");
const addContactError = createAction("phoneBook/addContactsError");

const delContactRequest = createAction("phoneBook/addContactsRequest");
const delContactSuccess = createAction("phoneBook/addContactsSuccess");
const delContactError = createAction("phoneBook/addContactsError");

const filterContact = createAction("phoneBook/filter");

export default {
  delContactRequest,
  delContactSuccess,
  delContactError,
  filterContact,
  addContactRequest,
  addContactSuccess,
  addContactError,
};
