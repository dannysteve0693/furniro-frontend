import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Furniro.</h3>
            <p className="text-gray-600">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link href="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link href="/payment" className="text-gray-600 hover:text-gray-900">Payment Options</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-gray-900">Returns</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-600"
              />
              <button
                type="submit"
                className="w-full bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <p className="text-center text-gray-600">
            2023 furino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
} 