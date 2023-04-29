import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'redux/contacts/contactsSlice';

import { Wrap } from './Wrap/Wrap';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { TitleH1, TitleH2 } from './Wrap/Wrap.styled';

export const App = () => {
  const contacts = useSelector(state => state.persistedReducer);
  console.log(contacts);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });
  const [filter, setFilter] = useState('');
  // const contacts = useSelector(
  //   state => state.persistedReducer.contactsInitialState
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = data => {
  //   console.log(data);
  //   const dataIncludes = contacts.find(
  //     contact => contact.name.toLowerCase() === data.name.toLowerCase()
  //   );
  //   if (dataIncludes) {
  //     return alert(`${data.name} is already in contacts`);
  //   }

  //   const newContact = {
  //     id: nanoid(),
  //     name: data.name,
  //     number: data.number,
  //   };

  //   setContacts([newContact, ...contacts]);
  // };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    // const normalaizedFilter = filter.toLowerCase();
    // return contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalaizedFilter)
    // );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <>
      <Wrap>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm submit={addContact} />
        <TitleH2>Contacts</TitleH2>
        <Filter value={filter} onChange={changeFilter} />
        <Contacts />
      </Wrap>
    </>
  );
};
