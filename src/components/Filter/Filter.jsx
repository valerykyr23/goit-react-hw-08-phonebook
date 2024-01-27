import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'some/contacts/FilterSlice';
import { selectFilter } from 'some/contacts/contacts-selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <div className={css.filterBox}>
      <label>
        Find contacts by name
        <br />
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={changeFilter}
          pattern="^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(([' \-][a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż])?[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};
