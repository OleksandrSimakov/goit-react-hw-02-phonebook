import FilterEl from './Filter.styled'

const styles = {
  input: {
    display: 'block',
    marginTop: '5px',
  },
}

function Filter({ filter, handleFilterChange }) {
  return (
    <FilterEl>
      <label>
        Find contacts by name
        <input
          style={styles.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        ></input>
      </label>
    </FilterEl>
  )
}

export default Filter
