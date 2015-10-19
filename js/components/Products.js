const React = require('react');
let { cartItems, productsData } = require('../data.js');
let Product = require('./Product.js');

let Products = React.createClass({
	render(){

		let products = [];
		for(let key in productsData){
			let item = productsData[key];
			products.push(<Product product={item} key={item.name}/>);
		}

		return (
			<div className='products'>
				{products}
			</div>
		);
	}
});

module.exports = Products;