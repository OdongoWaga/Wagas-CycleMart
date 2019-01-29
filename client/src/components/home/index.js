import React, { Component } from 'react'
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';

import { connect } from 'react-redux';
import { getProductsBySale, getProductsByArrival } from '../../actions/product_actions';
import CardBlock from '../utils/card_block';


 class Home extends Component {

  componentDidMount(){
    this.props.dispatch(getProductsBySale());
    this.props.dispatch(getProductsByArrival());
}


  render() {
    return (
      <div>
        <HomeSlider />
        <CardBlock 
        list={this.props.products.bySale}
        title="Best Selling Bikes"
                  />  
        <HomePromotion />
        <CardBlock 
        list={this.props.products.bySale}
        title="New Arrivals"
        />  

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      products: state.products
  }
}

export default connect(mapStateToProps)(Home);
