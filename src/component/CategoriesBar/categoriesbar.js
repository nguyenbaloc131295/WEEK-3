import React, { Component } from 'react';
import Categories from './componentsCategoriesBar/categories'
import './assets/css/index.css'

class CategoriesBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      isLoadingCategories: false,
    }
  }

  componentDidMount() {
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

  _onRenderCategories = () => {
    const { categories } = this.state
    let result = ''
    result = categories.map((r, i) => {
      if (i <= 2) {
        return (
          <Categories
            i={i}
            key={i}
            value={r.id}
            name={r.name}
          />
        )
      }
      return result
    })
    return result
  }

  render() {
    if (this.state.isLoadingCategories) {
      return (
        <div>
          <div className="banner">
            <div className="container">
              <div className="row">
                {this._onRenderCategories()}
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {
      return <div></div>
    }
  }
}

export default CategoriesBar;
