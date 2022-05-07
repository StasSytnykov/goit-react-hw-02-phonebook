import { Component } from 'react';
import { Contacts } from './Contacts';
import { ContactForm } from './ContactForm';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.addContact} />
        <Contacts contactsArr={this.state.contacts} />
      </div>
    );
  }
}
