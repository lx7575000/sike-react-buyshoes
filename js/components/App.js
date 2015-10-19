const React = require("react");

let { cartItems, productsData } = require('../data.js');

let Background = require('./Background.js');
let SiteTitle = require('./SiteTitle.js');

let Products = require('./Products.js');

let CartItem = require('./CartItem.js');

let Cart = require('./Cart.js');

let Checkout = require('./Checkout.js');




let App = React.createClass({
	componentDidMount() {
        var toggle = React.findDOMNode(this.refs.toggle);

        toggle.addEventListener("click",function() {
          document.body.classList.toggle("js-show-right-sidebar");
        });
    },
	render(){
		return (
			<div className="site">
			    <Background/>
		        <div className="site__main">
		          <div className="site__left-sidebar">
		            {/* <SiteTitle/> */}
		            <SiteTitle/>
		          </div>
		          <div className="site__content">
		            {/* <Products/> */}
		            <Products />
		          </div> {/* site__content */}
		        </div> {/* site__main */}
		        <div className="site__right-sidebar">
		          <Cart />
		          {/* <Cart/> */}
		          <Checkout />
		          {/* <Checkout/> */}
		        </div> {/* site__right-sidebar */}
		        <a className="site__right-sidebar-toggle" ref='toggle'>
		          <img src="img/arrow-icon.svg" />
		        </a>
		    </div> 
		);
	}
});

module.exports = App;