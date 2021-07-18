import ContactAddFormEl from './ContactAddForm.styled'

function ContactAddForm({ handleSubmit, name, handleChange, number }) {
  return (
    <ContactAddFormEl onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">Add Contact</button>
    </ContactAddFormEl>
  )
}

export default ContactAddForm
