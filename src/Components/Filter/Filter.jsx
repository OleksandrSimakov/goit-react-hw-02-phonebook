import FilterEl from './Filter.styled'

function Filter({ filter, handleFilterChange }) {
  return (
    <FilterEl>
      <label>
        Find contacts by name
        <input
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
