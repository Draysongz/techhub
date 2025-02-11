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
        "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg",
        "https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg",
        "https://images.pexels.com/photos/3394669/pexels-photo-3394669.jpeg",
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
    3: {
      name: "Apple Watch Ultra",
      price: 799.99,
      rating: 4.9,
      reviews: 275,
      description: "The most rugged and capable Apple Watch ever. Featuring a robust titanium case, precision dual-frequency GPS, and up to 36 hours of battery life.",
      images: [
        "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg",
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
        "https://images.pexels.com/photos/9385954/pexels-photo-9385954.jpeg",
      ],
      specs: [
        { label: "Display", value: "Always-On Retina" },
        { label: "Case Material", value: "Titanium" },
        { label: "Water Resistance", value: "100m" },
        { label: "Battery Life", value: "36 hours" }
      ],
      features: [
        "Precision GPS",
        "Action Button",
        "Emergency SOS",
        "Health Sensors"
      ]
    },
    4: {
      name: "Samsung Odyssey G9",
      price: 1499.99,
      rating: 4.8,
      reviews: 189,
      description: "Immerse yourself in the game with this 49-inch curved gaming monitor. Features 240Hz refresh rate, 1ms response time, and QLED technology.",
      images: [
        "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
        "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg",
        "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg",
      ],
      specs: [
        { label: "Screen Size", value: "49 inch" },
        { label: "Refresh Rate", value: "240Hz" },
        { label: "Response Time", value: "1ms" },
        { label: "Resolution", value: "5120x1440" }
      ],
      features: [
        "QLED Technology",
        "G-Sync Compatible",
        "HDR1000",
        "1000R Curvature"
      ]
    },
    5: {
      name: "Razer Huntsman V2",
      price: 199.99,
      rating: 4.7,
      reviews: 312,
      description: "The fastest gaming keyboard ever. Features optical switches, 8000Hz polling rate, and PBT keycaps for the ultimate gaming performance.",
      images: [
        "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
        "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg",
        "https://images.pexels.com/photos/3829227/pexels-photo-3829227.jpeg",
      ],
      specs: [
        { label: "Switch Type", value: "Optical" },
        { label: "Polling Rate", value: "8000Hz" },
        { label: "Keycaps", value: "PBT Double-shot" },
        { label: "Lighting", value: "Per-key RGB" }
      ],
      features: [
        "Optical Switches",
        "8000Hz HyperPolling",
        "PBT Keycaps",
        "Multi-function Dial"
      ]
    },
    6: {
      name: "Amazon Echo Show 15",
      price: 249.99,
      rating: 4.6,
      reviews: 234,
      description: "Transform your home with this 15.6-inch smart display. Features Alexa integration, widget functionality, and a beautiful Full HD screen.",
      images: [
        "https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg",
        "https://images.pexels.com/photos/4790254/pexels-photo-4790254.jpeg",
        "https://images.pexels.com/photos/4790253/pexels-photo-4790253.jpeg",
      ],
      specs: [
        { label: "Screen Size", value: "15.6 inch" },
        { label: "Resolution", value: "1920x1080" },
        { label: "Camera", value: "5MP" },
        { label: "Speakers", value: "Stereo" }
      ],
      features: [
        "Visual ID",
        "Widget Support",
        "Photo Frame",
        "Video Calling"
      ]
    },
    7: {
      name: "Logitech G Pro X",
      price: 149.99,
      rating: 4.8,
      reviews: 423,
      description: "Professional-grade gaming mouse with HERO 25K sensor and LIGHTSPEED wireless technology for unrivaled performance.",
      images: [
        "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
        "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg",
        "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg",
      ],
      specs: [
        { label: "Sensor", value: "HERO 25K" },
        { label: "Battery Life", value: "70 hours" },
        { label: "Weight", value: "80g" },
        { label: "Buttons", value: "8 Programmable" }
      ],
      features: [
        "LIGHTSPEED Wireless",
        "HERO 25K Sensor",
        "PowerPlay Compatible",
        "Programmable Buttons"
      ]
    },
    8: {
      name: "Logitech Brio 4K",
      price: 199.99,
      rating: 4.7,
      reviews: 289,
      description: "Professional 4K webcam with HDR and Windows Hello support. Perfect for streaming, video conferencing, and content creation.",
      images: [
        "https://images.pexels.com/photos/3643925/pexels-photo-3643925.jpeg",
        "https://images.pexels.com/photos/4006876/pexels-photo-4006876.jpeg",
        "https://images.pexels.com/photos/4006877/pexels-photo-4006877.jpeg",
      ],
      specs: [
        { label: "Resolution", value: "4K UHD" },
        { label: "Frame Rate", value: "60fps" },
        { label: "FOV", value: "90°" },
        { label: "Focus", value: "Autofocus" }
      ],
      features: [
        "4K HDR",
        "Windows Hello",
        "Background Replace",
        "RightLight 3"
      ]
    },
    9: {
      name: "Philips Hue Play",
      price: 179.99,
      rating: 4.6,
      reviews: 167,
      description: "Create immersive lighting experiences with this smart LED light bar. Sync with music, movies, and games for the ultimate ambiance.",
      images: [
        "https://images.pexels.com/photos/2917442/pexels-photo-2917442.jpeg",
        "https://images.pexels.com/photos/2917443/pexels-photo-2917443.jpeg",
        "https://images.pexels.com/photos/2917444/pexels-photo-2917444.jpeg",
      ],
      specs: [
        { label: "Lumens", value: "530" },
        { label: "Colors", value: "16M" },
        { label: "Power", value: "6.6W" },
        { label: "Lifetime", value: "25,000 hours" }
      ],
      features: [
        "Music Sync",
        "Game Sync",
        "Smart Control",
        "Voice Compatible"
      ]
    }
  }

  const product = products[id] || products[1] // Default to first product if ID not found

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-0">{product.name}</h1>
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
              <span className="text-5xl font-bold text-white">£{product.price}</span>
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