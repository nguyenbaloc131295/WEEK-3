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
import CategoriesNewArrivals from './componentsNewArrivals/categoriesNewArrivals'
import Thumbnail from './componentsNewArrivals/thumbnail'
import './assets/css/index.css'

class NewArrivals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      products: [],
      activeMen: false,
      activeWomen: false,
      activeAll: true,
      activeAcessori: false,
      isLoadingCategories: false,
      isLoadingProducts: false
    }
    this.Progress = []
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
            filters: myJson.body,
            isLoadingProducts: true
          })
        }
      })
    fetch('http://api.demo.nordiccoder.com/api/categories')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        if (myJson.header.status === 200) {
          this.setState({
            categories: myJson.body,
            isLoadingCategories: true
          })
        }
      })
  }

  _onFilterByCategories = (type = 'all', value = '') => {
    const { filters } = this.state
    const filter = filters.filter(product => { return value ? product.categoryId === value : filters })
    this.setState({
      products: filter,
      activeMen: type === 'men' ? true : false,
      activeWomen: type === 'women' ? true : false,
      activeAll: type === 'all' ? true : false,
      activeAccessories: type === 'accessories' ? true : false,
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

  // _onRenderCategoriesNewArrivals = () => {
  //   const { categories } = this.state
  //   let result = ''
  //   result = categories.map((r, i) => {
  //     if (i <= 2) {
  //       return (
  //         <li
  //           key={i}
  //           className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
  //           ref={(ref) => this.Progress[i] = ref}
  //           onClick={() => this._onFilterByCategories(r.name, r.id)}
  //         >
  //           {r.name}
  //         </li>
  //       )
  //     }
  //     return result
  //   })
  //   return result
  // }

  render() {
    if (this.state.isLoadingProducts && this.state.isLoadingCategories) {
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
                  <CategoriesNewArrivals
                    activeMen={this.state.activeMen}
                    activeWomen={this.state.activeWomen}
                    activeAll={this.state.activeAll}
                    activeAccessories={this.state.activeAcessori}
                    _onFilterByCategories={this._onFilterByCategories}
                  />
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
