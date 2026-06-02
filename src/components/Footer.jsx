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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

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
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Services</h3>
          </div>

          {/* Contact */}
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
              <span>+62 XXX XXXX XXXX</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>prantaraidn@gmail.com</span>
            </div>

            <a
              href="https://www.instagram.com/prantaralogistics.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-pink-500 transition"
            >
              <FaInstagram size={18} />
              <span>@prantaralogistics.id</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-500 transition"
            >
              <FaLinkedinIn size={18} />
              <span>Prantara Logistics</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-green-500 transition"
            >
              <FaWhatsapp size={18} />
              <span>+62 XXX XXXX XXXX</span>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} PT Prantara Logistic. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
