"use strict";

var cartItems = {
	"jameson-vulc": {
		id: "jameson-vulc",
		quantity: 1
	},

	"marana-x-hook-ups": {
		id: "marana-x-hook-ups",
		quantity: 2
	},

	"scout-womens-6": {
		id: "scout-womens-6",
		quantity: 2
	},

	"scout-womens-coco-ho-5": {
		id: "scout-womens-coco-ho-5",
		quantity: 1
	},

	"jameson-2-womens-8": {
		id: "jameson-2-womens-8",
		quantity: 1
	}
};

var productsData = {

	"jameson-vulc": {
		id: "jameson-vulc",
		name: "Jameson Vulc",
		price: 64.99,
		imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
		gender: "man"
	},

	"marana-x-hook-ups": {
		id: "marana-x-hook-ups",
		name: "Marana X Hook-Up",
		price: 79.99,
		imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
		gender: "man"
	},

	"jameson-e-lite": {
		id: "jameson-e-lite",
		name: "Jameson E-Lite",
		price: 69.99,
		imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
		gender: "man"
	},

	"jameson-e-lite-julian-davidson-4": {
		id: "jameson-e-lite-julian-davidson-4",
		name: "Jameson E-Lite Julian Davidson",
		price: 74.99,
		imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
		gender: "man"
	},

	"scout-womens-6": {
		id: "scout-womens-6",
		name: "Scout Women's",
		imagePath: "img/shoes/scout-womens-6-teal-orig.png",
		price: 59.99,
		gender: "woman"
	},

	"scout-womens-coco-ho-5": {
		id: "scout-womens-coco-ho-5",
		name: "Scout Women's Coco Ho",
		imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
		price: 59.99,
		gender: "woman"
	},

	"jameson-2-womens-8": {
		id: "jameson-2-womens-8",
		name: "Jameson 2 Women's",
		imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
		price: 59.99,
		gender: "woman"
	},

	"corby-womens-2": {
		id: "corby-womens-2",
		name: "Corby Women's",
		imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
		price: 44.99,
		gender: "woman"
	}
};

var SiteLeftTitle = React.createClass({
	displayName: "SiteLeftTitle",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "title" },
			React.createElement(
				"h2",
				{ className: "title" },
				"Buy Me Some Shoes"
			),
			React.createElement("img", { className: "title__heart", src: "img/heart.svg" })
		);
	}
});

var Product = React.createClass({
	displayName: "Product",

	render: function render() {
		var _props$product = this.props.product;
		var name = _props$product.name;
		var price = _props$product.price;
		var imagePath = _props$product.imagePath;

		return React.createElement(
			"div",
			{ className: "product" },
			React.createElement(
				"div",
				{ className: "product__display" },
				React.createElement(
					"div",
					{ className: "product__img-wrapper" },
					React.createElement("img", { className: "product__img", src: imagePath })
				),
				React.createElement(
					"a",
					{ className: "product__add" },
					React.createElement("img", { className: "product__add__icon", src: "img/cart-icon.svg" })
				),
				React.createElement(
					"div",
					{ className: "product__price" },
					"$" + price
				)
			),
			React.createElement(
				"div",
				{ className: "product__description" },
				React.createElement(
					"div",
					{ className: "product__name" },
					name
				),
				React.createElement("img", { className: "product__heart", src: "img/heart.svg" })
			)
		);
	}
});

var Products = React.createClass({
	displayName: "Products",

	render: function render() {
		var products = [];

		for (var productItem in productsData) {
			var product = productsData[productItem];
			products.push(React.createElement(Product, {
				product: product,
				key: product.id
			}));
		}

		return React.createElement(
			"div",
			{ className: "products" },
			products
		);
	}
});

var CartItemQty = React.createClass({
	displayName: "CartItemQty",

	render: function render() {
		var quantity = this.props.quantity;

		return React.createElement(
			"div",
			{ className: "cart-item__qty" },
			React.createElement(
				"div",
				{ className: "adjust-qty" + (this.props.variant === "gray" ? " adjust-qty--gray" : "") },
				React.createElement(
					"a",
					{ className: "adjust-qty__button" },
					"-"
				),
				React.createElement(
					"div",
					{ className: "adjust-qty__number" },
					quantity
				),
				React.createElement(
					"a",
					{ className: "adjust-qty__button" },
					"+"
				)
			)
		);
	}
});

var CartItem = React.createClass({
	displayName: "CartItem",

	render: function render() {
		var qty = this.props.Item;
		var item = productsData[qty.id];;
		var cartItemAttr = this.props.Item;
		return React.createElement(
			"div",
			{ className: "cart-item" },
			React.createElement(
				"div",
				{ className: "cart-item__top-part" },
				React.createElement(
					"div",
					{ className: "cart-item__image" },
					React.createElement("img", { src: item.imagePath })
				),
				React.createElement(
					"div",
					{ className: "cart-item__top-part__middle" },
					React.createElement(
						"div",
						{ className: "cart-item__title" },
						item.name
					),
					React.createElement(
						"div",
						{ className: "cart-item__price" },
						this.quantity === 1 ? "$" + item.price : "$" + item.price + "*" + qty.quantity
					)
				),
				React.createElement("img", { className: "cart-item__trash", src: "img/trash-icon.svg" })
			),
			React.createElement(CartItemQty, { quantity: qty.quantity })
		);
	}
});

var Cart = React.createClass({
	displayName: "Cart",

	componentDidMount: function componentDidMount() {
		var cart = React.findDOMNode(this.refs.cart);
		Ps.initialize(cart);
	},
	render: function render() {
		var carts = [];
		for (var item in cartItems) {
			carts.push(React.createElement(CartItem, { key: cartItems[item].id, Item: cartItems[item] }));
		}

		return React.createElement(
			"div",
			{ className: "cart" },
			React.createElement(
				"h3",
				{ className: "cart__title" },
				"Shopping Cart"
			),
			React.createElement(
				"div",
				{ className: "cart__content" },
				React.createElement(
					"h3",
					{ className: "cart__title cart__title--spacer" },
					"Shopping Cart"
				),
				carts
			)
		);
	}
});

var Checkout = React.createClass({
	displayName: "Checkout",

	render: function render() {
		var subtotal = 0;

		for (var itemId in cartItems) {
			var item = cartItems[itemId];

			subtotal += productsData[item.id].price * cartItems[itemId].quantity;
		}
		return React.createElement(
			"div",
			{ className: "checkout" },
			React.createElement("hr", { className: "checkout__divider" }),
			React.createElement("input", { type: "text", className: "checkout__coupon-input", placeholder: "coupon code" }),
			React.createElement(
				"div",
				{ className: "checkout__line" },
				React.createElement(
					"div",
					{ className: "checkout__line__label" },
					"Discount"
				),
				React.createElement(
					"div",
					{ className: "checkout__line__amount" },
					"-$90"
				)
			),
			React.createElement(
				"div",
				{ className: "checkout__line" },
				React.createElement(
					"div",
					{ className: "checkout__line__label" },
					"Subtotal"
				),
				React.createElement(
					"div",
					{ className: "checkout__line__amount checkout__line__amount--strikeout" },
					"$" + subtotal
				)
			),
			React.createElement(
				"div",
				{ className: "checkout__line" },
				React.createElement(
					"div",
					{ className: "checkout__line__amount checkout__line__amount--omg-savings" },
					"$360"
				)
			),
			React.createElement(
				"a",
				{ className: "checkout__button" },
				React.createElement("img", { className: "checkout__button__icon", src: "img/cart-icon.svg" }),
				React.createElement(
					"div",
					{ className: "checkout__button__label" },
					"Checkout"
				)
			)
		);
	}
});

var App = React.createClass({
	displayName: "App",

	componentDidMount: function componentDidMount() {
		var toggle = React.findDOMNode(this.refs.toggle);

		toggle.addEventListener("click", function () {
			document.body.classList("js-show-right-sidebar");
		});
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "site" },
			React.createElement(
				"div",
				{ className: "site__main" },
				React.createElement(
					"div",
					{ className: "site__left-sidebar" },
					React.createElement(SiteLeftTitle, null)
				),
				React.createElement(
					"div",
					{ className: "site__content" },
					React.createElement(Products, null)
				)
			),
			React.createElement(
				"div",
				{ className: "site__right-sidebar" },
				React.createElement(Cart, null),
				React.createElement(Checkout, null),
				React.createElement(
					"a",
					{ className: "site__right-sidebar-toggle", ref: "toggle" },
					React.createElement("img", { src: "img/arrow-icon.svg" })
				)
			)
		);
	}
});

window.onload = function () {
	// React.render(<SiteLeftTitle/>, document.querySelector('.site__left-sidebar'));
	// React.render(<App/>, document.querySelector('#root'));
	// React.render(<Products/>, document.querySelector('.site__content'));
	// React.render(<Cart/>, document.querySelector('.site__right-sidebar'));
	// React.render(<CartItem/>, document.querySelector('.cart'));
	// React.render(<Cart/>, document.querySelector('.site__right-sidebar'));
	// React.render(<Checkout/>, document.querySelector('.site__right-sidebar'));

	React.render(React.createElement(App, null), document.body);
};
