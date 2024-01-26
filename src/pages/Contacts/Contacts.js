import css from "./Contacts.module.css";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "some/contacts/contacts-operations";
import { useEffect } from "react";
import { selectContacts, selectIsLoading } from "some/contacts/contacts-selectors";
import { Loader } from "components/Loader/Loader";



const Contacts = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

 useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  return (

    <div >
      
      <div className={css.wrapper}>
        
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
        <h2 className={css.title}>Contacts</h2>
        {contacts.length < 1 ? (<h3>Add your first contact</h3>) : (<Filter/>)}
     
        <ContactList />
        {isLoading && <Loader />}
      </div>
      </div>)
};

export default Contacts;