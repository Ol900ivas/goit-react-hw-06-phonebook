import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { ContactItem } from '../ContactItem/ContactItem';
import { Ul } from './Contacts.styled';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <Ul>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </Ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
