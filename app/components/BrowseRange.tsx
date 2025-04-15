export default function BrowseRange() {
  const categories = [
    { name: 'Dining', image: 'dining' },
    { name: 'Living', image: 'living' },
    { name: 'Bedroom', image: 'bedroom' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse The Range</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="text-center">
              {/* Placeholder for category image */}
              <div className="bg-gray-100 w-full h-[300px] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">{category.name} Image</span>
              </div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 