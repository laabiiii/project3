import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold">FoodTuck</h1>
          <nav className="flex space-x-4">
            <Link href="/home" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link href="/menu" className="text-gray-600 hover:text-gray-900">
              Menu
            </Link>
            <Link href="/contact-us" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto py-10 px-6 flex-grow">
        <h2 className="text-3xl font-bold mb-4">Welcome to FoodTuck</h2>
        <p className="mb-8">Experience the best food with taste and quality.</p>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Replace 'image1.jpg', 'image2.jpg', etc. with your actual image paths */}
          <div className="rounded overflow-hidden shadow-lg">
            <img src="https://media.istockphoto.com/id/1232401725/photo/table-scene-of-assorted-take-out-or-delivery-foods-top-down-view-on-a-dark-wood-banner.jpg?s=1024x1024&w=is&k=20&c=JdFBjWIAJVT3okFE7nfb9yfwxpFi-a68E66pCNn03Ko=" alt="picture of food" />
            <div className="p-4">
              <h3 className="text-lg font-bold">Delicious Dishes</h3>
              <p className="text-gray-600">Taste our chef's specialties.</p>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg">
            <img src="https://media.istockphoto.com/id/1155240408/photo/table-filled-with-large-variety-of-food.jpg?s=1024x1024&w=is&k=20&c=y-Lbco14g-CbkNKEaNId872h0XaYxtiRWwrh35aAAOk=" alt="picture of integrents" />
            <div className="p-4">
              <h3 className="text-lg font-bold">Fresh Ingredients</h3>
              <p className="text-gray-600">Only the best ingredients for our dishes.</p>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg">
            <img src="https://media.istockphoto.com/id/1125370050/photo/dining-tableware-and-furniture-set-home-interior-background-concept.jpg?s=1024x1024&w=is&k=20&c=uUMOMVARR3IuDjZGLWOV7W_4nAievVNnGCLuNl3SyD0=" alt="picture of resturant" />
            <div className="p-4">
              <h3 className="text-lg font-bold">Cozy Ambience</h3>
              <p className="text-gray-600">Enjoy dining in a relaxing atmosphere.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 Elite Food. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
