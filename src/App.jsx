import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const bannerSlides = [
    {
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
      title: "Next-Gen Gaming",
      subtitle: "Experience gaming like never before",
      cta: "Shop Gaming"
    },
    {
      image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg",
      title: "Premium Audio",
      subtitle: "Immerse yourself in pure sound",
      cta: "Shop Audio"
    },
    {
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
      title: "Smart Home",
      subtitle: "Transform your living space",
      cta: "Shop Smart Home"
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Pro Gaming Headset X1",
      price: "299",
      image: "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg",
      category: "Gaming",
      rating: 5,
      badge: "New",
      description: "Premium gaming headset with 7.1 surround sound and RGB"
    },
    {
      id: 2,
      name: "Galaxy Buds Pro",
      price: "199",
      image: "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg",
      category: "Audio",
      rating: 4,
      badge: "Best Seller",
      description: "True wireless earbuds with ANC and 360° audio"
    },
    {
      id: 3,
      name: "Apple Watch Ultra",
      price: "799",
      image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg",
      category: "Wearables",
      rating: 5,
      badge: "Featured",
      description: "Advanced health tracking with titanium case"
    },
    {
      id: 4,
      name: "Samsung Odyssey G9",
      price: "1499",
      image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
      category: "Gaming",
      rating: 5,
      badge: "Premium",
      description: "49-inch curved gaming monitor with 240Hz"
    },
    {
      id: 5,
      name: "Razer Huntsman V2",
      price: "199",
      image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
      category: "Gaming",
      rating: 4,
      badge: "Hot",
      description: "Optical switches with 8000Hz polling rate"
    },
    {
      id: 6,
      name: "Amazon Echo Show 15",
      price: "249",
      image: "https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg",
      category: "Smart Home",
      rating: 4,
      badge: "Trending",
      description: "15.6-inch smart display with Alexa"
    },
    {
      id: 7,
      name: "Logitech G Pro X",
      price: "149",
      image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
      category: "Gaming",
      rating: 5,
      badge: "Pro Choice",
      description: "HERO 25K sensor with LIGHTSPEED wireless"
    },
    {
      id: 8,
      name: "Logitech Brio 4K",
      price: "199",
      image: "https://images.pexels.com/photos/3643925/pexels-photo-3643925.jpeg",
      category: "Accessories",
      rating: 4,
      badge: "New",
      description: "4K HDR webcam with Windows Hello"
    },
    {
      id: 9,
      name: "Philips Hue Play",
      price: "179",
      image: "https://images.pexels.com/photos/2917442/pexels-photo-2917442.jpeg",
      category: "Smart Home",
      rating: 4,
      badge: "Popular",
      description: "Smart LED light bar with sync box"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-3xl font-bold text-white">
                Tech<span className="text-blue-500">Hub</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 px-4 py-2 rounded-lg transition-all">Gaming</Link>
              <Link to="/" className="text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 px-4 py-2 rounded-lg transition-all">Audio</Link>
              <Link to="/" className="text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 px-4 py-2 rounded-lg transition-all">Wearables</Link>
              <Link to="/" className="text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 px-4 py-2 rounded-lg transition-all">Smart Home</Link>
            </div>
            <div className="flex items-center space-x-6">
              <button className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-2 rounded-lg hover:from-purple-600 hover:to-blue-600 text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link to="/cart" className="text-white hover:text-blue-400 transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-blue-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </Link>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-purple-500/50">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={
          <>
            {/* Hero Banner Slider */}
            <div className="relative h-screen w-full overflow-hidden">
              {bannerSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute inset-0">
                    <img
                      src={slide.image}
                      className="w-full h-full object-cover"
                      alt={slide.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                  </div>
                  <div className="relative h-full flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                      <div className={`max-w-xl transform transition-all duration-1000 ${
                        currentSlide === index ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                      }`}>
                        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 perspective-text">
                          {slide.title}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">{slide.subtitle}</p>
                        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-purple-500/50 text-lg">
                          {slide.cta}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Slider Controls */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {bannerSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-8' 
                        : 'bg-gradient-to-r from-purple-600/20 to-blue-600/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Featured Products */}
            <div className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 text-white perspective-text">
                  Featured Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {featuredProducts.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                      <div 
                        className="group bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden card-3d"
                      >
                        {product.badge && (
                          <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                            {product.badge}
                          </div>
                        )}
                        <div className="relative h-80 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                              <button className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-3 rounded-full hover:from-purple-600 hover:to-blue-600 text-white transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                              </button>
                              <button className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-3 rounded-full hover:from-purple-600 hover:to-blue-600 text-white transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-blue-400">{product.category}</span>
                            <div className="flex">
                              {[...Array(product.rating)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                          <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold text-blue-400">${product.price}</p>
                            <button className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Categories Grid */}
            <div className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Gaming', 'Audio', 'Wearables', 'Smart Home'].map((category, index) => (
                    <div 
                      key={index}
                      className="relative h-60 group overflow-hidden rounded-2xl card-3d"
                    >
                      <img
                        src={`https://images.pexels.com/photos/${[404280, 577769, 437037, 1029757][index]}/pexels-photo-${[404280, 577769, 437037, 1029757][index]}.jpeg`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        alt={category}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-bold text-white mb-2">{category}</h3>
                        <button className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all">
                          Shop Now →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
