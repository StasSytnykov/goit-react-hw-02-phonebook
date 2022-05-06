import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onChangeInput = event => {
    console.log(event.target.name);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <form action="">
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

          <button type="submit">Add Contact</button>
        </form>
        <h2>Contacts</h2>
        <ul></ul>
      </div>
    );
  }
}
