import { useState } from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pro Gaming Headset X1",
      price: 299.99,
      quantity: 1,
      image: "https://images.pexels.com/photos/5499303/pexels-photo-5499303.jpeg"
    },
    {
      id: 2,
      name: "Galaxy Buds Pro",
      price: 199.99,
      quantity: 2,
      image: "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg"
    }
  ])

  const updateQuantity = (id, change) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const shipping = 0
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-6">Your cart is empty</div>
            <Link 
              to="/"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-purple-500/50"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-white font-semibold">{item.name}</h3>
                    <p className="text-purple-400 font-bold">£{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white p-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
                    >
                      -
                    </button>
                    <span className="text-white w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white p-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="bg-gradient-to-r from-red-600/20 to-red-400/20 text-red-400 p-2 rounded-lg hover:from-red-600 hover:to-red-400 hover:text-white transition-all"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 h-fit">
              <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax</span>
                  <span>£{tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <div className="flex justify-between text-white font-bold">
                    <span>Total</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white mt-6 px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-purple-500/50">
                Proceed to Checkout
              </button>
              <Link 
                to="/"
                className="block text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart 