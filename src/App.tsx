'use client';

import type React from "react"
import { Facebook, Instagram, Menu, Search, ShoppingCart } from "lucide-react"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="bg-[#07484a] text-white p-1 mr-1">
              <span className="font-bold">IN</span>
            </div>
            <span className="text-[#07484a] font-bold">WOOD</span>
          </a>
        </div>
        <nav className="flex items-center space-x-8">
          <a href="/" className="text-[#07484a] font-medium">
            Home
          </a>
          <a href="/products" className="text-[#07484a] font-medium">
            Products
          </a>
          <a href="/about" className="text-[#07484a] font-medium">
            About
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button aria-label="Search">
            <Search className="h-5 w-5 text-[#07484a]" />
          </button>
          <button aria-label="Cart">
            <ShoppingCart className="h-5 w-5 text-[#07484a]" />
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="flex md:hidden items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="bg-[#07484a] text-white p-1 mr-1">
              <span className="font-bold">IN</span>
            </div>
            <span className="text-[#07484a] font-bold">WOOD</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button aria-label="Search">
            <Search className="h-5 w-5 text-[#07484a]" />
          </button>
          <button aria-label="Cart">
            <ShoppingCart className="h-5 w-5 text-[#07484a]" />
          </button>
          <button aria-label="Menu">
            <Menu className="h-5 w-5 text-[#07484a]" />
          </button>
        </div>
      </header>

      <main>
        <section className="relative bg-[#fdfbf8] px-4 md:px-12 py-8 md:py-16 bg-gray-200 rounded-bl-3xl rounded-br-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-[#07484a] leading-tight">
                Exclusive Deals of Furniture Collection
              </h1>
              <p className="mt-4 text-[#70908b]">Explore different categories. Find the best deals.</p>
              <button className="mt-6 bg-[#70908b] hover:bg-[#07484a] text-white rounded-md px-6 py-2">Shop Now</button>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#07484a] mb-8 text-center md:text-left">
              Popular Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#caf3e5] rounded-lg p-4 relative">
                <div className="h-48 flex items-center justify-center">
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    alt="image 1"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-medium text-[#07484a]">Armchair</h3>
                  <p className="text-sm text-[#70908b]">Light beige chair</p>
                  <p className="font-medium text-[#07484a] mt-2">$145</p>
                </div>
              </div>

              <div className="bg-[#e0eff6] rounded-lg p-4 relative">
                <div className="h-48 flex items-center justify-center">
                  <img
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    alt="image 2"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-medium text-[#07484a]">Premium Sofa</h3>
                  <p className="text-sm text-[#70908b]">Light beige chair</p>
                  <p className="font-medium text-[#07484a] mt-2">$145</p>
                </div>
              </div>

              <div className="bg-[#eeebff] rounded-lg p-4 relative">
                <div className="h-48 flex items-center justify-center">
                  <img
                    src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                    alt="image 3"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-medium text-[#07484a]">Minimal Sofa</h3>
                  <p className="text-sm text-[#70908b]">Light beige chair</p>
                  <p className="font-medium text-[#07484a] mt-2">$145</p>
                </div>
              </div>

              <div className="bg-[#fff4e7] rounded-lg p-4 relative">
                <div className="h-48 flex items-center justify-center">
                  <img
                    src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                    alt="image 4"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-medium text-[#07484a]">Dining Chair</h3>
                  <p className="text-sm text-[#70908b]">Light beige chair</p>
                  <p className="font-medium text-[#07484a] mt-2">$145</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#07484a] mb-8 text-center md:text-left">
              Special Package
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#f3f6f5] rounded-lg p-4 flex items-center justify-center">
                <img
                  src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                  alt="image 5"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-[#07484a]">Larkin Wood Full Set</h3>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-[#ffc107] fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="font-bold text-[#07484a]">$729.99</p>
                </div>

                <div className="mt-4">
                  <button className="bg-[#70908b] hover:bg-[#07484a] text-white rounded-md px-6 py-2 flex items-center">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to cart
                  </button>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-[#07484a]">Description</h4>
                  <p className="mt-2 text-sm text-[#70908b]">
                    Our Asgaard Outdoor Chair Lounge is an elegant and stylish touch to your outdoor space and cozy
                    nook. Create beautiful memories with this fine piece of furniture. Artisan crafted quality all
                    together, offering you with the fine experience.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#f3f6f5] p-4 rounded-lg flex">
                    <img 
                      src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                      alt="image 6" 
                      className="w-16 h-16 bg-gray-200 rounded-md mr-3 flex-shrink-0">
                    </img>
                    <div>
                      <h5 className="text-sm font-medium text-[#07484a]">Living Room Family Set</h5>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-3 h-3 text-[#ffc107] fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm font-medium text-[#07484a] mt-1">$229.99</p>
                      <a href="#" className="text-xs text-[#07484a] underline mt-1 inline-block">
                        See Details
                      </a>
                    </div>
                  </div>

                  <div className="bg-[#f3f6f5] p-4 rounded-lg flex">
                    <img 
                      src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                      alt="image 7" 
                      className="w-16 h-16 bg-gray-200 rounded-md mr-3 flex-shrink-0">
                    </img>
                    <div>
                      <h5 className="text-sm font-medium text-[#07484a]">Living Room Special Set</h5>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-3 h-3 text-[#ffc107] fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm font-medium text-[#07484a] mt-1">$329.99</p>
                      <a href="#" className="text-xs text-[#07484a] underline mt-1 inline-block">
                        See Details
                      </a>
                    </div>
                  </div>

                  <div className="bg-[#f3f6f5] p-4 rounded-lg flex">
                    <img 
                      src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                      alt="image 8" 
                      className="w-16 h-16 bg-gray-200 rounded-md mr-3 flex-shrink-0">
                    </img>
                    <div>
                      <h5 className="text-sm font-medium text-[#07484a]">Living Room Special Set</h5>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-3 h-3 text-[#ffc107] fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm font-medium text-[#07484a] mt-1">$587.99</p>
                      <a href="#" className="text-xs text-[#07484a] underline mt-1 inline-block">
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#fdfbf8] py-12 px-4 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center mb-4">
              <div className="bg-[#07484a] text-white p-1 mr-1">
                <span className="font-bold">IN</span>
              </div>
              <span className="text-[#07484a] font-bold">WOOD</span>
            </a>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-[#07484a]" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-[#07484a]" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-medium text-[#07484a] mb-2">Address</h4>
              <p className="text-sm text-[#70908b]">+123 456 789</p>
              <p className="text-sm text-[#70908b]">877 The Bronx, NY</p>
              <p className="text-sm text-[#70908b]">10458, USA</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-[#07484a] mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#70908b] hover:text-[#07484a]">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#70908b] hover:text-[#07484a]">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#70908b] hover:text-[#07484a]">
                  Sizing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#07484a] mb-4">Legal Stuff</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#70908b] hover:text-[#07484a]">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#70908b] hover:text-[#07484a]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#70908b] hover:text-[#07484a]">
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <p className="text-sm text-[#70908b]">Copyright ©2020 INWOOD. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App