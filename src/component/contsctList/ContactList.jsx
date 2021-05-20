import React from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/operations';

const ContactList = ({contacts, deleteContact}) => {
    return (
        <ul>
            {contacts.map(({id, name, number}) =>
                <li key={id}>
                    <p>{name}:{number}</p>
                    <button id={id} onClick={()=>deleteContact(id)}>Delete</button>
                </li>)}
        </ul>
    );
}


 
  const getFilterContact = (filter, contacts) => {
    return contacts.filter((contact) =>
      contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase())
    );
  };

const mapStateToProps = ({contacts:{ filter, items }}) => ({

    contacts: getFilterContact (filter, items)

  
})  

const mapDispatchToProps = dispatch=>({
    deleteContact: id => dispatch(operations.delContact(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);