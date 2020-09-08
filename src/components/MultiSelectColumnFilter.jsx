import React, { useState, useEffect } from "react"

function toggleMunicipality(e, selectedMunis, setSelectedMunis) {
  e.currentTarget.querySelector('.filters__button').classList.toggle('filters__button--active');
  e.currentTarget.classList.toggle('filters__option--active');
  e.currentTarget.querySelector('.filters__value').classList.toggle('filters__option--active');
  const muni = e.currentTarget.querySelector('.filters__value').innerText;
  if (selectedMunis === undefined) {
    setSelectedMunis([muni])
  } else if (!selectedMunis.includes(muni)) {
    setSelectedMunis(selectedMunis.concat([muni]))
  } else if (selectedMunis.includes(muni) && selectedMunis.length > 1) {
    const selectedIndex = selectedMunis.indexOf(muni)
    setSelectedMunis(selectedMunis.slice(0, selectedIndex).concat(selectedMunis.slice(selectedIndex+1)))
  } else {
    setSelectedMunis(undefined)
  }
}

function MultiSelectColumnFilter({
  column: { setFilter, preFilteredRows, id },
}) {
  const [selectedMunis, setSelectedMunis] = useState()
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  useEffect(() => {
    setFilter(selectedMunis)
  }, [selectedMunis])
  return (
    <ul className="filters__list">
      {options.map((option, i) => (
        <li
          className="filters__option"
          key={`option-${i}`}
          onClick={(e) => toggleMunicipality(e, selectedMunis, setSelectedMunis)}>
          <span className="filters__value">{option}</span>
          <button className="filters__button">+</button>
        </li>
      ))}
    </ul>
  )
}

export default MultiSelectColumnFilter;