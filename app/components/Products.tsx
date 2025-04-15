type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  tag?: string;
};

export default function Products() {
  const products: Product[] = [
    { id: 1, name: 'Syltherine', price: 2500000, image: 'product1', tag: 'New' },
    { id: 2, name: 'Leviosa', price: 2500000, image: 'product2', tag: 'Sale' },
    { id: 3, name: 'Lolito', price: 7000000, image: 'product3', tag: 'Sale' },
    { id: 4, name: 'Respira', price: 500000, image: 'product4', tag: 'New' },
    { id: 5, name: 'Grifo', price: 1500000, image: 'product5' },
    { id: 6, name: 'Muggo', price: 750000, image: 'product6', tag: 'New' },
    { id: 7, name: 'Pingky', price: 7000000, image: 'product7', tag: 'Sale' },
    { id: 8, name: 'Potty', price: 500000, image: 'product8', tag: 'New' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                {/* Placeholder for product image */}
                <div className="bg-gray-100 w-full h-[200px] flex items-center justify-center">
                  <span className="text-gray-400">Product Image</span>
                </div>
                {product.tag && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-sm rounded">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">Rp {product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded hover:bg-amber-600 hover:text-white transition">
            Show More
          </button>
        </div>
      </div>
    </section>
  )
} 