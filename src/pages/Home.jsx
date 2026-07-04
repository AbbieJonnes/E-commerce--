import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover the Joy of <span className="text-yellow-400">Music</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Welcome to <span className="font-semibold">Melody Music Store</span>,
              your one-stop destination for quality musical instruments and
              accessories. Whether you're a beginner or a professional musician,
              we have everything you need to create beautiful music.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-yellow-400 text-slate-900 hover:bg-yellow-500"
              >
                <Link to="/products">Shop Now</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-white text-slate-900 hover:bg-white hover:text-slate-900"
              >
                <Link to="/products">Browse Collection</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900"
              alt="Musical Instruments"
              className="rounded-2xl shadow-2xl w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="text-5xl mb-4">🎸</div>
            <h3 className="text-xl font-semibold">Guitars</h3>
            <p className="text-gray-600 mt-2">
              Acoustic, electric and bass guitars from trusted brands.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="text-5xl mb-4">🎹</div>
            <h3 className="text-xl font-semibold">Keyboards</h3>
            <p className="text-gray-600 mt-2">
              Portable keyboards, digital pianos and MIDI controllers.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="text-5xl mb-4">🥁</div>
            <h3 className="text-xl font-semibold">Drums</h3>
            <p className="text-gray-600 mt-2">
              Drum kits, percussion instruments and accessories.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="text-5xl mb-4">🎻</div>
            <h3 className="text-xl font-semibold">Violins</h3>
            <p className="text-gray-600 mt-2">
              Classical and modern violins for every skill level.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-6 border-t">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Choose Melody Music Store?
          </h2><p className="mt-6 text-gray-600 text-lg">
            We are committed to providing high-quality musical instruments,
            affordable prices, and exceptional customer service. Whether you're
            buying your first guitar or upgrading your studio equipment, we're
            here to help you every step of the way.
          </p>

          <Button
            asChild
            className="mt-8 bg-slate-900 hover:bg-slate-800 text-white"
          >
            <Link to="/products">Explore Our Collection</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;