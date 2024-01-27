import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'some/contacts/contacts-operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const formSubmithandler = event => {
    const { name, number } = event.target.elements;

    event.preventDefault();

    dispatch(addContact({ name: name.value, number: number.value }));

    event.target.reset();
  };

  return (
    <form className={css.mainForm} onSubmit={formSubmithandler}>
      <div>
        <label className={css.formLabel}>
          Name
          <input
            className={css.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>

      <div>
        <label className={css.formLabel}>
          Number
          <input
            className={css.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>

      <button className={css.addButton} type="submit">
        {' '}
        Add contact
      </button>
    </form>
  );
};
