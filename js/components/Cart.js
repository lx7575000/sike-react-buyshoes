let {cartItems, productsData} = require('../data.js');
const React = require('react');
const Ps = require("perfect-scrollbar");
let CartItem = require('./cartItem.js');

let Cart = React.createClass({
	componentDidMount() {
        let $overflow = React.findDOMNode(this.refs.overflow);
        Ps.initialize($overflow);
    },
	render(){

		let carts = [];
		for(let key in cartItems){
			let cartItem = cartItems[key];
			// console.log(cartItem);
			carts.push(<CartItem item={cartItem} key={key}/>)
		}
		return(
			<div className='cart'>
			 <h3 className="cart__title">Shopping Cart</h3>
                <div className="cart__content" ref="overflow">
					{carts}
				</div>
			</div>
		);
	}
});

module.exports = Cart;