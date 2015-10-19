const React = require('react');

let {cartItems, productsData} = require('../data.js');
let QuantityControl = require('./QuantityControl.js');

let CartItem = React.createClass({
	render(){

		let item = this.props.item;
		let {id, quantity} = item;
		let productAttr = productsData[id];
		let {name, price, imagePath} = productAttr;

		return (
			<div className="cart-item">
		        <div className="cart-item__top-part">
		          <div className="cart-item__image">
		            <img src={imagePath} />
		          </div>
		          <div className="cart-item__top-part__middle">
		            <div className="cart-item__title">
		            	{name}
		            </div>
		            <div className="cart-item__price">
		              {quantity===1 ? "$"+price : "$" + price + " * " + quantity}
		            </div>
		          </div>
		          <img className="cart-item__trash" src="img/trash-icon.svg" />
		        </div> {/* cart-item__top-part */}
		        <QuantityControl quantity={quantity} variant='gray'/>
		     </div>
		);
	}
});

module.exports = CartItem;