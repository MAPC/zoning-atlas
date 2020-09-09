import React from "react"

function MultiSelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  return (
    <ul className="filters__list">
      {options.map((option, i) => (
        <li
          className="filters__option"
          key={`option-${i}`}
          onClick={(e) => {
            e.currentTarget.querySelector('.filters__button').classList.toggle('filters__button--active');
            e.currentTarget.classList.toggle('filters__option--active');
            e.currentTarget.querySelector('.filters__value').classList.toggle('filters__option--active');
            const muni = e.currentTarget.querySelector('.filters__value').innerText;
            if (filterValue === undefined) {
              setFilter([muni])
            } else if (!filterValue.includes(muni)) {
              setFilter(filterValue.concat([muni]))
            } else if (filterValue.includes(muni) && filterValue.length > 1) {
              const selectedIndex = filterValue.indexOf(muni)
              setFilter(filterValue.slice(0, selectedIndex).concat(filterValue.slice(selectedIndex+1)))
            } else {
              setFilter(undefined)
            }
          }}>
          <span className="filters__value">{option}</span>
          <button className="filters__button">+</button>
        </li>
      ))}
    </ul>
  )
}

export default MultiSelectColumnFilter;