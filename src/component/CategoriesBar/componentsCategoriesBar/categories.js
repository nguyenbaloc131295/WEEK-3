import React from 'react'
import banner1 from '../assets/images/banner_1.jpg'
import banner2 from '../assets/images/banner_2.jpg'
import banner3 from '../assets/images/banner_3.jpg'

const Categories = (props) => {
  return (
    <div className="col-md-4">
      <div className="banner_item align-items-center"
        style={{ backgroundImage: `url(${props.i === 0 ? banner1 : props.i === 2 ? banner2 : banner3})` }}
      >
        <div className="banner_category">
          <a href="categories.html">{props.name}</a>
        </div>
      </div>
    </div>
  )
}

export default Categories;
