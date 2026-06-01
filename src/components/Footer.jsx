export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              PT Prantara Logistic
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Trusted logistics partner providing transportation,
              warehousing, and supply chain solutions across Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Services
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Freight Forwarding</li>
              <li>Warehousing</li>
              <li>Container Transport</li>
              <li>Supply Chain Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📍 Jakarta, Indonesia</p>
              <p>📞 +62 812 3456 7890</p>
              <p>✉ info@prantaralogistic.com</p>
            </div>

            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="border border-gray-700 px-3 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                Facebook
              </a>

              <a
                href="#"
                className="border border-gray-700 px-3 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                Instagram
              </a>

              <a
                href="#"
                className="border border-gray-700 px-3 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} PT Prantara Logistic. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}