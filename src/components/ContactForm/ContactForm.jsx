import { nanoid } from 'nanoid';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    });

    console.log(this.state);

    event.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <h2>Phonebook</h2>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onChangeInput}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onChangeInput}
          />
        </label>

        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
