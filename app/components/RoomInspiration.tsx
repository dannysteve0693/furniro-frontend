export default function RoomInspiration() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              50+ Beautiful rooms<br />
              inspiration
            </h2>
            <p className="text-gray-600">
              Our designer already made a lot of beautiful
              prototype of rooms that inspire you
            </p>
            <button className="bg-amber-600 text-white px-8 py-3 rounded hover:bg-amber-700 transition">
              Explore More
            </button>
          </div>
          <div>
            {/* Placeholder for inspiration image */}
            <div className="bg-gray-100 w-full h-[400px] rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Room Inspiration Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 