import ContactListItemEl from '../ContactListItem/ContactListItem.styled'
import PropTypes from 'prop-types'

const styles = {
  button: {
    width: '50px',
    fontSize: '12px',
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '1px solid gray',
    cursor: 'pointer',
    marginLeft: '30px',
  },
}

function ContactListItem({ name, number, onDelBtnClick }) {
  return (
    <ContactListItemEl>
      {name}: {number}
      <button
        type="submit"
        name={name}
        onClick={onDelBtnClick}
        style={styles.button}
      >
        Delete
      </button>
    </ContactListItemEl>
  )
}

ContactListItem.propTypes = {
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
  handleChange: PropTypes.func,
}

ContactListItem.defaultProps = {
  name: null,
  number: null,
  handleSubmit: () => null,
  handleChange: () => null,
}

export default ContactListItem
