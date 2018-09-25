import React from 'react'

const CategoriesNewArrival = (props) => {
  console.log(props)
  return (
    <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
      <li
        className={`${props.activeAll ? 'active' : ''} grid_sorting_button button d-flex flex-column justify-content-center align-items-center`}
        data-filter="*"
        onClick={() => props._onFilterByCategories()}
      >
        all
      </li>
      <li
        className={`${props.activeWomen ? 'active' : ''} grid_sorting_button button d-flex flex-column justify-content-center align-items-center`}
        data-filter=".women"
        onClick={() => props._onFilterByCategories('women', '5b822e919c300309b7e9bf0e')}
      >
        women's
     </li>
      <li
        className={`${props.activeAccessories ? 'active' : ''} grid_sorting_button button d-flex flex-column justify-content-center align-items-center`}
        data-filter=".accessories"
        onClick={() => props._onFilterByCategories('accessories', '5b822ea99c300309b7e9bf13')}
      >
        accessories
      </li>
      <li
        className={`${props.activeMen ? 'active' : ''} grid_sorting_button button d-flex flex-column justify-content-center align-items-center`}
        data-filter=".men"
        onClick={() => props._onFilterByCategories('men', '5b822e7f9c300309b7e9befc')}
      >
        men's
      </li>
    </ul>
  )
}

export default CategoriesNewArrival
