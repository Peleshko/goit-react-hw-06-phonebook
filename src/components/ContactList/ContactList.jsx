import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import ContactListItem from '../ContactList/ContactListItem/ContactListItem';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          contactName={name}
          contactNumber={number}
          onClickDeleteContact={() => {
            dispatch(contactsActions.deleteContacts(id));
            toast('Deleted', { autoClose: 3000 });
          }}
        />
      ))}
    </ul>
  );
};

export default ContactList;
