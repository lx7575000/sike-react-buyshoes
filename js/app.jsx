let cartItems = {
  "jameson-vulc": {
    id: "jameson-vulc",
    quantity: 1,
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    quantity: 2,
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    quantity: 2,
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    quantity: 1,
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    quantity: 1,
  },
};

let productsData = {

  "jameson-vulc": {
    id: "jameson-vulc",
    name: "Jameson Vulc",
    price: 64.99,
    imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
    gender: "man",
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    name: "Marana X Hook-Up",
    price: 79.99,
    imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
    gender: "man",
  },

  "jameson-e-lite": {
    id: "jameson-e-lite",
    name: "Jameson E-Lite",
    price: 69.99,
    imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
    gender: "man",
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    name: "Jameson E-Lite Julian Davidson",
    price: 74.99,
    imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
    gender: "man",
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    name: "Scout Women's",
    imagePath: "img/shoes/scout-womens-6-teal-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    name: "Scout Women's Coco Ho",
    imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    name: "Jameson 2 Women's",
    imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    name: "Corby Women's",
    imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
    price: 44.99,
    gender: "woman",
  },
};


let SiteLeftTitle = React.createClass({
	render: function(){
		return (
			<div className='title'>
				<h2 className='title'>Buy Me Some Shoes</h2>
				<img className="title__heart" src="img/heart.svg" />
			</div>
		);
	}
});

let Product = React.createClass({
  render: function() {
  	let {name,price,imagePath} = this.props.product;
    return (
    	<div className="product">
		  <div className="product__display">
		    <div className="product__img-wrapper">
		      <img className="product__img" src={imagePath}/>
		    </div>

		    <a className="product__add">
		      <img className="product__add__icon" src="img/cart-icon.svg"/>
		    </a>

		    <div className="product__price">
		      {"$" + price}
		    </div>
		  </div>

		  <div className="product__description">
		    <div className="product__name">
		    	{name}
		    </div>

		    <img className="product__heart" src="img/heart.svg"/>
		  </div>
		</div> 
    );
  }
});

let Products = React.createClass({
  render() {
    let products = [];

    for(let productItem in productsData){
    	let product = productsData[productItem];
    	products.push(
    		<Product 
    			product={product}
    			key={product.id}
    		/>
    	);
    }

    return (
      <div className="products">
      	{products}
      </div>
    );
  }
});

let CartItemQty = React.createClass({
	render(){
		let quantity = this.props.quantity;

		return (
			<div className="cart-item__qty">
		     <div className= {"adjust-qty" + (this.props.variant === 'gray' ? " adjust-qty--gray" : "")}>
		        <a className="adjust-qty__button">-</a>
		          <div className="adjust-qty__number">{quantity}</div>
		          <a className="adjust-qty__button">+</a>
		       </div>
			</div>
		);
	}
});

let CartItem = React.createClass({
	
	render: function(){
		let qty = this.props.Item;
		let item = productsData[qty.id];;
		let cartItemAttr = this.props.Item;
		return (
			 <div className="cart-item">
		        <div className="cart-item__top-part">
		          <div className="cart-item__image">
		            <img src={item.imagePath} />
		          </div>
		          <div className="cart-item__top-part__middle">
		            <div className="cart-item__title">
		            	{item.name}
		            </div>
		            <div className="cart-item__price">
		            	{this.quantity===1 ? "$" + item.price : "$" + item.price + "*" + qty.quantity}
		            </div>
		          </div>
		          <img className="cart-item__trash" src="img/trash-icon.svg" />
		        </div>
		        <CartItemQty quantity={qty.quantity}/>
		      </div>
		);
	}
});



let Cart = React.createClass({
	componentDidMount() {
        let cart = React.findDOMNode(this.refs.cart);
        Ps.initialize(cart);
    },
	render() {
		let carts = [];
		for(let item in cartItems){
			carts.push(<CartItem key={cartItems[item].id} Item = {cartItems[item]}/>)
		}
		
		return (
			<div className="cart">
		        <h3 className="cart__title">Shopping Cart</h3>
		        <div className="cart__content">
		          <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
		          	{carts}
		        </div>
		     </div>
		);
	}
});


let Checkout = React.createClass({
	render(){
		let subtotal = 0;
			
			for(let itemId in cartItems){
				let item = cartItems[itemId];

				subtotal += productsData[item.id].price * cartItems[itemId].quantity;
			}
		return (

	      <div className="checkout">
	        <hr className="checkout__divider" />
	        <input type="text" className="checkout__coupon-input" placeholder="coupon code" />
	        <div className="checkout__line">
	          <div className="checkout__line__label">
	            Discount
	          </div>
	          <div className="checkout__line__amount">
	            -$90
	          </div>
	        </div>
	        <div className="checkout__line">
	          <div className="checkout__line__label">
	            Subtotal
	          </div>
	          <div className="checkout__line__amount checkout__line__amount--strikeout">
	            {"$" + subtotal}
	          </div>
	        </div>
	        <div className="checkout__line">
	          <div className="checkout__line__amount checkout__line__amount--omg-savings">
	            $360
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

let App = React.createClass({
	componentDidMount(){
		let toggle = React.findDOMNode(this.refs.toggle);

		toggle.addEventListener('click', function(){
			document.body.classList('js-show-right-sidebar');
		});
	},
	render(){
		return (
			<div className='site'>
				<div className="site__main">
                    <div className="site__left-sidebar">
                        <SiteLeftTitle />
                    </div>

                    <div className="site__content">
                        <Products />
                    </div>
                </div>

                <div className="site__right-sidebar">
                    <Cart />
                    <Checkout />

                    <a className="site__right-sidebar-toggle" ref="toggle">
                        <img src="img/arrow-icon.svg"/>
                    </a>
                </div>
			</div>
		);
	}
})

window.onload = () => {
	// React.render(<SiteLeftTitle/>, document.querySelector('.site__left-sidebar'));
	// React.render(<App/>, document.querySelector('#root'));
	// React.render(<Products/>, document.querySelector('.site__content'));
	// React.render(<Cart/>, document.querySelector('.site__right-sidebar'));
	// React.render(<CartItem/>, document.querySelector('.cart'));
	// React.render(<Cart/>, document.querySelector('.site__right-sidebar'));
	// React.render(<Checkout/>, document.querySelector('.site__right-sidebar'));

	 React.render(<App/>, document.body);
}