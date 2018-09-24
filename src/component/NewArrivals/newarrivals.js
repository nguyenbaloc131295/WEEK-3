import React, { Component } from 'react';
// import product_1 from './assets/images/product_1.png'
// import product_2 from './assets/images/product_2.png'
// import product_3 from './assets/images/product_3.png'
// import product_4 from './assets/images/product_4.png'
// import product_5 from './assets/images/product_5.png'
// import product_6 from './assets/images/product_6.png'
// import product_7 from './assets/images/product_7.png'
// import product_8 from './assets/images/product_8.png'
// import product_9 from './assets/images/product_9.png'
// import product_10 from './assets/images/product_10.png'
import Thumbnail from './componentsNewArrivals/thumbnail'
import './assets/css/index.css'

class NewArrivals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      products: [],
      isLoadingCategories: false,
      isLoadingProducts: false
    }
  }

  componentDidMount() {
    fetch('http://api.demo.nordiccoder.com/api/products')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        if (myJson.header.status === 200) {
          this.setState({
            products: myJson.body,
            isLoadingProducts: true
          })
        }
      })
  }

  _onRenderThumbnail = () => {
    const { products } = this.state
    let result = ''
    result = products.map((r, i) => {
      return (
        <Thumbnail
          key={i}
          value={r.id}
          name={r.name}
          image={r.image}
          thumbnail={r.thumbnail}
          shortDescription={r.shortDescription}
          salePrice={r.salePrice}
          originalPrice={r.originalPrice}
        />
      )
    })
    return result
  }

  render() {
    if (this.state.isLoadingProducts) {
      return (
        <div className="new_arrivals">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title new_arrivals_title">
                  <h2>New Arrivals</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col text-center">
                <div className="new_arrivals_sorting">
                  <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              {this._onRenderThumbnail()}
            </div>
          </div>
        </div>
      );
    }
    else {
      return <div></div>
    }
  }
}

export default NewArrivals;
