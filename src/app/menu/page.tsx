export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Our Menu</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {["Burger", "Pizza", "Pasta", "Salad", "Smoothie"].map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
            <h2 className="text-2xl font-bold">{item}</h2>
            <p className="mt-2 text-gray-600">1700Rs</p>
          </div>
        ))}
      </div>
    </div>
  );
}
