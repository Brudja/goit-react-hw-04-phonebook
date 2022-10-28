import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(inic);
  const [filter, setFilter] = useState('');
  // state = {
  //   contacts: [],
  //   filter: '',
  // };
  function inic() {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      return JSON.parse(localContacts);
    }
    return [];
  }

  // componentDidMount(){
  //   const localContacts = localStorage.getItem("contacts");
  //   const localContactsPars = JSON.parse(localContacts);
  //   if(localContactsPars)
  //     this.setState({contacts: localContactsPars})

  // }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // handleChengeName = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // }
  const handleChengeName = event => {
    switch (event.target.name) {
      case 'filter':
        setFilter(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleFilter = () => {
    return contacts.filter(element =>
      element.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleSubmit = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    setContacts(prevState => [...prevState, { name, number, id: nanoid() }]);
  };
  // setContacts(prevState => {
  //   return {
  //     setContacts(
  //       ...prevState,
  //       { name, number, id: nanoid() }
  //     )

  const btnDeleteConatact = id => {
    setContacts(prevState => prevState.filter(item => item.id !== id));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        // flexWrap: 'wrap',
        flexDirection: 'column',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm submit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter chengeName={handleChengeName} />
      <ContactList deleteBtn={btnDeleteConatact} filterFn={handleFilter()} />
    </div>
  );
};
