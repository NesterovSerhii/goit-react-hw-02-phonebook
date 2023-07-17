import { Component } from "react"

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };
    
    render() {
        const { name, number } = this.state;
        return (
            <>
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
                </>
        )
    }
}



