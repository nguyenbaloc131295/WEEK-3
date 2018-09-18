import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/header'
import HeroBanner from './component/HeroBanner/herobanner'
import CategoriesBar from './component/CategoriesBar/categoriesbar'
import NewArrivals from './component/NewArrivals/newarrivals'
import DealOfWeek from './component/DealOfWeek/dealofweek'
import ShippingBar from './component/ShippingBar/shippingbar'
import Footer from './component/Footer/footer'

class App extends Component {
  render() {
    return (
      <div className="super_container">
        <Header />
        <HeroBanner />
        <CategoriesBar />
        <NewArrivals />
        <DealOfWeek />
        <ShippingBar />
        <Footer />
      </div >
    );
  }
}

export default App;
