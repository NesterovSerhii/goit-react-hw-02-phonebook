import { Component } from "react";
import { Section } from "./Section/Section";
import { Contacts } from "./Contacts/Contacts";
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
  
  handleChange = (e) => {
    // console.log('e', e)
     const { name, value } = e.target;
     this.setState({ [name]: value });
  };

  handleSubmit = (e)  => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = {
            name:name,
            id: nanoid(),
            number:number,
        }
    this.setState((prev) => ({
      contacts: [newContact, ...prev.contacts],
      name: '',
      number: ''
		}))
  }
 
  filterChange = (e) => {
  this.setState({ filter: e.target.value });
};

  filterContacts = () => this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))

  findContact = name => this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
  
  render() { 
    const { name, number, filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <>
        <Section title="Phonebook">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">
            <input onChange={this.handleChange}
                type="text"
                value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
            />
            </label>
            <label htmlFor="number">
            <input onChange={this.handleChange}
              type="tel"
              value={number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />              
            </label>
            <button type='submit'>Add contact</button>
          </form>
          
        </Section>
         <Section title="Contacts">
        <Contacts
          contacts={filteredContacts}
          filter={filter}
          handleChange={this.filterChange}
        />
      </Section>
    </>
  );  
  }
};
