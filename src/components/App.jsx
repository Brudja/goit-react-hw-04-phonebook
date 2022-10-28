import { Component } from 'react';
import { nanoid } from 'nanoid';
import {ContactForm} from "./ContactForm/ContactForm"
import {ContactList} from "./ContactList/ContactList"
import {Filter} from "./Filter/Filter"


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount(){
    const localContacts = localStorage.getItem("contacts");
    const localContactsPars = JSON.parse(localContacts);
    if(localContactsPars)
      this.setState({contacts: localContactsPars})
    
  }

  componentDidUpdate(_, prevState){
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  handleChengeName = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFilter = () => {
    return this.state.contacts.filter(element =>
      element.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleSubmit = (name, number) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
       return alert(`${name} is already in contacts`);
     }
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name, number, id: nanoid() },
        ],
      };
    });
  };

  btnDeleteConatact = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };
  

  render() {
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
      ><h1>Phonebook</h1>
      <ContactForm submit = {this.handleSubmit}/>
      <h2>Contacts</h2>
      <Filter chengeName = {this.handleChengeName} />
      <ContactList deleteBtn={this.btnDeleteConatact} filterFn = {this.handleFilter()}/>
      </div>
    );
  }
}
