export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-orange-500 font-semibold uppercase">About Us</p>

          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            PT Prantara Logistic
          </h2>
        </div>

        {/* About */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Trusted Logistics Partner Since 2026
            </h3>

            <p className="text-gray-600 leading-relaxed mb-5">
              PT Prantara Logistic was established in 2028 with a commitment to
              providing reliable logistics and transportation solutions
              throughout Indonesia.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              We specialize in freight transportation, warehousing,
              distribution, and supply chain management, helping businesses move
              goods efficiently and safely.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With experienced professionals and a growing logistics network, PT
              Prantara Logistic continues to support businesses through
              innovative and customer-focused logistics services.
            </p>
          </div>

          {/* Image */}
          <div data-aos="fade-left">
            <img
              src="/public/Home.jpeg"
              alt="PT Prantara Logistic"
              className="rounded-2xl shadow-xl w-full h-112.5 object-cover"
            />
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="mt-24">
          {/* Heading */}
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              Core Values
            </p>

            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              Vision & Mission
            </h2>

            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Our commitment to delivering reliable, innovative, and
              customer-focused logistics solutions throughout Indonesia.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div
              className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg  transition duration-300"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Vision</h3>

              <p className="leading-relaxed text-gray-100">
                To become a leading logistics company in Indonesia by delivering
                reliable, innovative, and customer-oriented logistics solutions
                that support sustainable business growth.
              </p>
            </div>

            {/* Mission */}
            <div
              className="bg-orange-500 text-white p-8 rounded-2xl shadow-lg  transition duration-300"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Mission</h3>

              <ul className="space-y-3">
                <li>
                  1. Provide safe, efficient, and timely logistics services.
                </li>

                <li>
                  2. Maintain excellent customer satisfaction through
                  professional service.
                </li>

                <li>
                  3. Utilize technology and innovation to improve operational
                  efficiency.
                </li>

                <li>
                  4. Build long-term partnerships based on trust and
                  reliability.
                </li>

                <li>
                  5. Support clients' business growth through integrated
                  logistics solutions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
