import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import { CartContext } from '../../context/cart.context';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss'


const CartDropdown = () => {
    const { cartItems, setIsCartOpen} = useContext(CartContext);
    const navigate = useNavigate();


    const goToCheckoutHandler = () => {
        setIsCartOpen(false)
        navigate('/checkout')
    }



    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                        cartItems.map((cartItem) => (
                            <CartItem key={cartItem.id} cartItem={cartItem} />
                        ))
                    ) : (
                        <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown