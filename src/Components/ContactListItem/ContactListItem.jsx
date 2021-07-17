import ContactListItemEl from '../ContactListItem/ContactListItem.styled'

function ContactListItem({ name, number }) {
  return (
    <ContactListItemEl>
      {name}: {number}
    </ContactListItemEl>
  )
}

export default ContactListItem
