export default function HeroSection() {
  return (
    <section className="relative h-screen bg-gray-100">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-amber-600 font-medium">New Arrival!</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Discover Our<br />
              New Collection
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-amber-600 text-white px-8 py-3 rounded hover:bg-amber-700 transition">
              Buy Now
            </button>
          </div>
          <div className="hidden md:block">
            {/* Placeholder for hero image */}
            <div className="bg-gray-200 w-full h-[400px] rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Hero Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 