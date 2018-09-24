import React from 'react'

const Categories = (props) => {
  return (
    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">{props.name}</li>
  )
}

export default Categories;
