import React, { Component } from 'react'
import ContactAddFormEl from './ContactAddForm.styled'

export default class ContactAddForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({
      name: '',
      number: '',
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, number } = this.state
    return (
      <ContactAddFormEl onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            required
            value={number}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">Add Contact</button>
      </ContactAddFormEl>
    )
  }
}
