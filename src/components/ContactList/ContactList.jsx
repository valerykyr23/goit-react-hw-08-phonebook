import css from "./ContactList.module.css"

export const ContactList = () => {
  

  return (
    <ul className={css.contactsList}>
      
        <li className={css.contactItem} >
          <span>Contact name</span>
          <button
            className={css.delButton}>
            Delete
          </button>
          </li>
          <li className={css.contactItem} >
          <span>Contact name</span>
          <button
            className={css.delButton}>
            Delete
          </button>
          </li>
          <li className={css.contactItem} >
          <span>Contact name</span>
          <button
            className={css.delButton}>
            Delete
          </button>
          </li>
          <li className={css.contactItem} >
          <span>Contact name</span>
          <button
            className={css.delButton}>
            Delete
          </button>
        </li>
      
    </ul>
  );
};

