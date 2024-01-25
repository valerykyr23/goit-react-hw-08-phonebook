import css from "./ContactList.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "some/contacts/contacts-operations";
import { selectFilter, selectContacts } from "some/contacts/contacts-selectors";


export const ContactList = () => {
  const dispatch = useDispatch();

   

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <p>{name}:</p> <span>{number}</span>{' '}
          <button
            className={css.delButton}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

