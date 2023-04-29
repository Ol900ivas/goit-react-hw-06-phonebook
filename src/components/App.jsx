import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

import { Wrap } from './Wrap/Wrap';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { TitleH1, TitleH2 } from './Wrap/Wrap.styled';

export const App = () => {
  const contacts = useSelector(state => state.persistedReducer);
  console.log(contacts);
  // const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });
  const [filter, setFilter] = useState('');
  // const contacts = useSelector(
  //   state => state.persistedReducer.contactsInitialState
  // );

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  // const getFilteredContacts = () => {
  // const normalaizedFilter = filter.toLowerCase();
  // return contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalaizedFilter)
  // );
  // };

  // const filteredContacts = getFilteredContacts();
  return (
    <>
      <Wrap>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm />
        <TitleH2>Contacts</TitleH2>
        <Filter value={filter} onChange={changeFilter} />
        <Contacts />
      </Wrap>
    </>
  );
};
