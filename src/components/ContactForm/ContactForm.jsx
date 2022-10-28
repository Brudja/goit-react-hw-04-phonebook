import { useState } from 'react';
import PropTypes from 'prop-types';

export const ContactForm = ({submit}) => {
  
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  // state = {
  //   name: "",
  //   number: ""
  // };


 const onSubmit = (event) =>{
    event.preventDefault();
    submit(name, number);
    // this.setState({ name: "", number:"" })
    setName("")
    setNumber("")
  }

  // handleChengeName = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };
  const handleChengeName = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        break;
    }
  };


    return (
      <form onSubmit={onSubmit}>
        <label>Name<br/><input
          value={name}
          type="text"
          name="name"
          onChange={handleChengeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        /></label>
        <br/>
        <label>Number<br/><input
          value={number}
          type="tel"
          name="number"
          onChange={handleChengeName}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /></label>
        <br/>
        <button style={{
          color:"green",
          backgroundColor: "gray",
        }} type="submit">Add contact</button>
      </form>
    );
}

ContactForm.propTypes={
  submit: PropTypes.func.isRequired,
}