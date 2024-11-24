import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

import {cart,addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';
renderOrderSummary();
renderPaymentSummary();
function updateCheckoutQuantity(){
  let checkoutQuantity=0;
  cart.forEach((cartItem)=>{
    checkoutQuantity+=cartItem.quantity;
  });

  document.querySelector('.js-update-checkout').innerHTML=`${checkoutQuantity} items`;
}
updateCheckoutQuantity();