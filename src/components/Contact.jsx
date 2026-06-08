import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Get In Touch
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Have questions about our logistics services? Contact our team and
            we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-2">Contact Information</h3>

            <p className="text-gray-400 mb-8">
              Reach us through any of the channels below.
            </p>

            <div className="grid gap-4">
              {/* Address */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/5 p-5 rounded-xl hover:bg-white/10 transition duration-300"
              >
                <MapPin size={24} className="text-orange-500 shrink-0" />

                <div>
                  <h4 className="font-semibold">Address</h4>

                  <p className="text-gray-300 text-sm">Jakarta, Indonesia</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-4 bg-white/5 p-5 rounded-xl hover:bg-white/10 transition duration-300"
              >
                <Phone size={24} className="text-orange-500 shrink-0" />

                <div>
                  <h4 className="font-semibold">Phone Number</h4>

                  <p className="text-gray-300 text-sm">+62 812 3456 7890</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:prantaraidn@gmail.com"
                className="flex items-center gap-4 bg-white/5 p-5 rounded-xl hover:bg-white/10 transition duration-300"
              >
                <Mail size={24} className="text-orange-500 shrink-0" />

                <div>
                  <h4 className="font-semibold">Email Address</h4>

                  <p className="text-gray-300 text-sm">prantaraidn@gmail.com</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/prantaralogistics.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/5 p-5 rounded-xl hover:bg-pink-600 transition duration-300"
              >
                <FaInstagram size={24} />

                <div>
                  <h4 className="font-semibold">Instagram</h4>

                  <p className="text-gray-300 text-sm">@prantaralogistics.id</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/5 p-5 rounded-xl hover:bg-blue-700 transition duration-300"
              >
                <FaLinkedinIn size={24} />

                <div>
                  <h4 className="font-semibold">LinkedIn</h4>

                  <p className="text-gray-300 text-sm">Prantara Logistic</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/5 p-5 rounded-xl hover:bg-green-600 transition duration-300"
              >
                <FaWhatsapp size={24} />

                <div>
                  <h4 className="font-semibold">WhatsApp</h4>

                  <p className="text-gray-300 text-sm">+62 812 3456 7890</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-slate-50 p-8 rounded-2xl shadow-xl"
            data-aos="fade-left"
          >
            <form className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter message subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
