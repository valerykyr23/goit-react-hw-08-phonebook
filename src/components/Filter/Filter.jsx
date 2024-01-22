import css from "./Filter.module.css";



export const Filter = () => {
 

  return (
    <div className={css.filterBox}>
      <label className={css.label}>
        Find contacts by name
        <br />
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          id="filter"
        //   value={filter}
         
          pattern="^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(([' \-][a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż])?[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};