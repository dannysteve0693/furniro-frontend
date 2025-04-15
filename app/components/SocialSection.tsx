export default function SocialSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Share your setup with</h2>
          <p className="text-3xl font-bold text-amber-600">#FuniroFurniture</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Social Image {item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 