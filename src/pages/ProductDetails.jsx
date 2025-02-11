import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()

  const products = {
    1: {
      name: "Pro Gaming Headset X1",
      price: 299.99,
      rating: 4.8,
      reviews: 328,
      description: "Experience gaming like never before with our premium gaming headset. Features 7.1 surround sound, noise-canceling microphone, RGB lighting, and memory foam cushions for extended gaming sessions.",
      images: [
        "https://images.pexels.com/photos/5499303/pexels-photo-5499303.jpeg",
        "https://images.pexels.com/photos/3945663/pexels-photo-3945663.jpeg",
        "https://images.pexels.com/photos/5499281/pexels-photo-5499281.jpeg",
      ],
      specs: [
        { label: "Driver Size", value: "50mm" },
        { label: "Frequency Response", value: "20Hz-20kHz" },
        { label: "Microphone Type", value: "Detachable Boom" },
        { label: "Connection", value: "USB / 3.5mm" }
      ],
      features: [
        "7.1 Surround Sound",
        "RGB Lighting",
        "Memory Foam Cushions",
        "Noise Cancellation"
      ]
    },
    2: {
      name: "Galaxy Buds Pro",
      price: 199.99,
      rating: 4.9,
      reviews: 456,
      description: "Premium wireless earbuds with intelligent active noise cancellation, 360° spatial audio, and crystal-clear call quality. IPX7 water resistance for worry-free workouts.",
      images: [
        "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg",
        "https://images.pexels.com/photos/8534089/pexels-photo-8534089.jpeg",
        "https://images.pexels.com/photos/8534091/pexels-photo-8534091.jpeg",
      ],
      specs: [
        { label: "Battery Life", value: "28 hours" },
        { label: "Connectivity", value: "Bluetooth 5.1" },
        { label: "Water Resistance", value: "IPX7" },
        { label: "ANC Levels", value: "Intelligent" }
      ],
      features: [
        "360° Spatial Audio",
        "Intelligent ANC",
        "Voice Detect",
        "Gaming Mode"
      ]
    },
    // Add more products as needed...
  }

  const product = products[id] || products[1] // Default to first product if ID not found

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden bg-gray-800">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden transition-all ${
                    selectedImage === index 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 p-0.5' 
                      : 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-0.5'
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-blue-400">{product.rating}</span>
                <span className="text-gray-400">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-gray-300 text-lg">{product.description}</p>

            <div className="flex items-baseline space-x-3">
              <span className="text-5xl font-bold text-white">${product.price}</span>
              <span className="text-lg text-green-400">Free Shipping</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-gray-300">Quantity:</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white p-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
                  >
                    -
                  </button>
                  <span className="text-white text-lg w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white p-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-purple-500/50">
                  Add to Cart
                </button>
                <button className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white p-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Specifications */}
            <div className="border-t border-gray-800 pt-6">
              <h2 className="text-xl font-bold text-white mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.specs.map((spec, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-gray-400 text-sm">{spec.label}</div>
                    <div className="text-white">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-gray-800 pt-6">
              <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
              <ul className="grid grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails 