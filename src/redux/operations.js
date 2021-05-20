import axios from "axios";
import actions from "../redux/actions";

axios.defaults.baseURL = "http://localhost:4040";

const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contact = { name, number };

    dispatch(actions.addContactRequest());

    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(actions.addContactSuccess(data)))
      .catch((error) => dispatch(actions.addContactError(error)));
  };

const delContact = (contactId) => (dispatch) => {
  dispatch(actions.delContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.delContactSuccess(contactId)))
    .catch((error) => dispatch(actions.delContactError(error)));
};

export default { addContact, delContact };
