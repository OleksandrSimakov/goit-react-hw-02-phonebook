import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ContactAddForm from './ContactAddForm/ContactAddForm'
import ContactListItem from './ContactListItem/ContactListItem'

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  // handleNameChange = ({ target }) => {
  //   const nameInput = target.value
  //   this.setState({
  //     name: nameInput,
  //   })
  // }

  // handlePhoneChange = ({ target }) => {
  //   const PhoneInput = target.value
  //   this.setState({
  //     number: PhoneInput,
  //   })
  // }

  // handleFilterChange = ({ target }) => {
  //   const filterInput = target.value
  //   this.setState({
  //     filter: filterInput,
  //   })
  // }

  getFilteredNames = () => {
    const { filter, contacts } = this.state
    const normilizedFilterState = filter.toLowerCase()

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normilizedFilterState),
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { name, number } = this.state

    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { id: uuidv4(), name: name, number: number },
      ],
    }))
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
    const { name, number, filter } = this.state

    const filteredContactNames = this.getFilteredNames()

    return (
      <>
        <h2>Phonebook</h2>

        <ContactAddForm
          handleSubmit={this.handleSubmit}
          name={name}
          handleChange={this.handleChange}
          number={number}
        />

        <h2>Contacts</h2>

        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleChange}
          ></input>
        </label>

        <ul>
          {filteredContactNames.map((contact) => (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
        </ul>
      </>
    )
  }
}