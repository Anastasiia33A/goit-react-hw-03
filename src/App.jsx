
import { useEffect, useState} from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';


const dataContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const savedsContact = () => {
//   const savedContact = window.localStorage.getItem("savedContact");
//   return savedContact ? JSON.parse(savedContact) : dataContacts;
// }
   
export default function App() {
  const [inputValue, setInputValue] = useState("");
  // const [contacts, setContacts] = useState(savedsContact);
  const [contacts, setContacts] = useState(() => {
    const savedContact = window.localStorage.getItem("savedContact");
    return savedContact ? JSON.parse(savedContact) : dataContacts;
  });
  
  // const deleteContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

 const deleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("savedContact", JSON.stringify(contacts));
  }, [contacts]);

  

  const searchName = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(inputValue.toLowerCase());
  });
 

  const addContact = contact => {
    setContacts((prevContact) => {
      return [...prevContact, contact]
    })
  };

  
 
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} setContacts={setContacts} addContact={addContact} />
        <SearchBox contacts={searchName} onSearch={setInputValue} />
        <ContactList contacts={searchName} onDelete={deleteContact} />
      </div>
    </>
  );
}
