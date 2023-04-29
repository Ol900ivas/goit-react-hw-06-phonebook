import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { RxCross2 } from 'react-icons/rx';

import { Li, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Li key={id}>
      <p>
        {name}: {number}
      </p>
      <Button onClick={handleClick}>
        <RxCross2 size="20px" />
      </Button>
    </Li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
