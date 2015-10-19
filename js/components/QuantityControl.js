const React = require('react');

let QuantityControl = React.createClass({
	render(){
		let variant = this.props.variant;
		let quantity = this.props.quantity;
		// let className = variant==='gray' ? "adjust-qty--" + variant : "adjust-qty";

		return (
			<div className="adjust-qty">
			  <a className="adjust-qty__button">-</a>
			  <div className="adjust-qty__number">{quantity}</div>
			  <a className="adjust-qty__button">+</a>
			</div>
		);
	}
});

module.exports = QuantityControl;