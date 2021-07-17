import ContactAddFormEl from './ContactAddForm.styled'

function ContactAddForm({
  handleSubmit,
  name,
  handleNameChange,
  number,
  handlePhoneChange,
}) {
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
          onChange={handleNameChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="tel"
          required
          value={number}
          onChange={handlePhoneChange}
        ></input>
      </label>
      <button>Add Contact</button>
    </ContactAddFormEl>
  )
}

export default ContactAddForm
