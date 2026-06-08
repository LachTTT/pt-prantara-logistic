export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/Home.jpeg"
        alt="PT Prantara Logistic"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full text-white">
        <h1
          data-aos="fade-right"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Reliable Logistics
          <br />
          Across Indonesia
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-sm sm:text-base md:text-xl max-w-2xl mb-8 leading-relaxed"
        >
          PT Prantara Logistic provides transportation, warehousing, freight
          forwarding, and supply chain solutions with reliability and
          efficiency.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#about"
            className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 px-8 py-4 rounded-lg font-semibold text-center text-base transition-colors"
          >
            About Us
          </a>

          <a
            href="#service"
            className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black active:bg-white/90 text-center text-base transition-colors"
          >
            Service
          </a>
        </div>
      </div>
    </section>
  );
}
