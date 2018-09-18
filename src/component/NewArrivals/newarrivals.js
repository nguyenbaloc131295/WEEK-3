import React, { Component } from 'react';
import product_1 from './assets/images/product_1.png'
import product_2 from './assets/images/product_2.png'
import product_3 from './assets/images/product_3.png'
import product_4 from './assets/images/product_4.png'
import product_5 from './assets/images/product_5.png'
import product_6 from './assets/images/product_6.png'
import product_7 from './assets/images/product_7.png'
import product_8 from './assets/images/product_8.png'
import product_9 from './assets/images/product_9.png'
import product_10 from './assets/images/product_10.png'
import './assets/css/index.css'

class NewArrivals extends Component {
  render() {
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
            <div className="col">
              <div className="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
                <div className="product-item men">
                  <div className="product discount product_filter">
                    <div className="product_image">
                      <img src={product_1} alt="" />
                    </div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                      <div className="product_price">$520.00<span>$590.00</span></div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="">add to cart</a></div>
                </div>
                <div className="product-item women">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_2} alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
                      <div className="product_price">$610.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="">add to cart</a></div>
                </div>
                <div className="product-item women">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_3} alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Blue Yeti USB Microphone Blackout Edition</a></h6>
                      <div className="product_price">$120.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="">add to cart</a></div>
                </div>
                <div className="product-item accessories">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_4} alt="" />
                    </div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                      <div className="product_price">$410.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="">add to cart</a></div>
                </div>
                <div className="product-item women men">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_5} alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Pryma Headphones, Rose Gold & Grey</a></h6>
                      <div className="product_price">$180.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="">add to cart</a></div>
                </div>
                <div className="product-item accessories">
                  <div className="product discount product_filter">
                    <div className="product_image">
                      <img src={product_6} alt="" />
                    </div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="#single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                      <div className="product_price">$520.00<span>$590.00</span></div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="">add to cart</a></div>
                </div>
                <div className="product-item women">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_7} alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
                      <div className="product_price">$610.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="">add to cart</a></div>
                </div>
                <div className="product-item accessories">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_8} alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Blue Yeti USB Microphone Blackout Edition</a></h6>
                      <div className="product_price">$120.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="">add to cart</a></div>
                </div>
                <div className="product-item men">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_9} alt="" />
                    </div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                      <div className="product_price">$410.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="">add to cart</a></div>
                </div>
                <div className="product-item men">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_10} alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">Pryma Headphones, Rose Gold & Grey</a></h6>
                      <div className="product_price">$180.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="">add to cart</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewArrivals;
