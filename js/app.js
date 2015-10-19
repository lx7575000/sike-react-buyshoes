<<<<<<< HEAD
function makeCartScrollNicely() {
  var cart = document.querySelector(".cart");
  Ps.initialize(cart);
}


window.onload = function() {
  console.log("page loaded");
  makeCartScrollNicely();
}

=======
const React = require('react');
let App = require('./components/App.js');

window.onload = () => {
	React.render(<App/>, document.querySelector('#root'));
}
>>>>>>> styled
