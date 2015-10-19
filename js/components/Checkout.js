let { cartItems, productsData } = require('../data.js');
const React = require('react');


let Checkout = React.createClass({
	render(){
		let total = 0;
		for(let key in cartItems){
			total += cartItems[key].quantity * productsData[key].price;
		}

		return(
			<div className="checkout">
		        <hr className="checkout__divider" />
		        <input type="text" className="checkout__coupon-input" placeholder="coupon code" />
		      
		        <div className="checkout__line">
		          <div className="checkout__line__label">
		            Subtotal
		          </div>
		          <div className="checkout__line__amount checkout__line__amount--strikeout">
		          	{"$" + total}
		          </div>
		        </div>
		      
		        <a className="checkout__button">
		          <img className="checkout__button__icon" src="img/cart-icon.svg" />
		          <div className="checkout__button__label">
		            Checkout
		          </div>
		        </a>
		      </div>
		);
	}
});


module.exports = Checkout;