export default function Home() {
  return (
    <section id="home" className="h-screen relative flex items-center">
      {/* Background Image */}
      <img
        src="/public/home.jpeg"
        alt="PT Prantara Logistic"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Reliable Logistics
          <br />
          Across Indonesia
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-gray-200 mb-8">
          PT Prantara Logistic provides transportation, warehousing, freight
          forwarding, and supply chain solutions with reliability and
          efficiency.
        </p>

        <div className="flex gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">
            About Us
          </button>

          {/* <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  );
}
