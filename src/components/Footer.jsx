import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <img
              src="/logo.png"
              alt="PT Prantara Logistic"
              className="h-20 w-auto object-contain mb-4"
            />

            <p className="text-gray-400 leading-relaxed">
              PT Prantara Logistic is a trusted logistics partner providing
              transportation, warehousing, freight forwarding, and supply chain
              solutions across Indonesia.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="border border-gray-700 p-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="border border-gray-700 p-3 rounded-lg hover:bg-white hover:text-pink-600 transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="border border-gray-700 p-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="border border-gray-700 p-3 rounded-lg hover:bg-white hover:text-green-600 transition"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
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
            <h3 className="text-lg font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Freight Forwarding</li>
              <li>Warehousing</li>
              <li>Container Transportation</li>
              <li>Supply Chain Management</li>
              <li>Domestic & International Shipping</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex shrink-0" />
                <span>
                  Jakarta, Indonesia
                  <br />
                  PT Prantara Logistic Headquarters
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+62 812 3456 7890</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>prantara@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} PT Prantara Logistic. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}