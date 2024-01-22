import css from "./Contacts.module.css";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";



const Contacts = () => {
    return (
        <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
     <Filter/>
      <ContactList/>
    </div>)
};

export default Contacts;