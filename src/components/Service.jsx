import {
  Truck,
  Warehouse,
  Package,
  Ship,
  ShieldCheck,
  Clock,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Truck size={42} />,
      title: "Land Transportation",
      description:
        "Reliable trucking and land transportation services across Indonesia with safe and efficient delivery.",
      aos: "fade-up",
    },
    {
      icon: <Warehouse size={42} />,
      title: "Warehousing",
      description:
        "Secure warehouse facilities to store and manage your inventory efficiently and professionally.",
      aos: "fade-up",
    },
    {
      icon: <Package size={42} />,
      title: "Freight Forwarding",
      description:
        "Comprehensive freight forwarding solutions for domestic and international shipments.",
      aos: "fade-up",
    },
    {
      icon: <Ship size={42} />,
      title: "Sea Freight",
      description:
        "Cost-effective sea freight services for containerized and bulk cargo transportation.",
      aos: "fade-up",
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Safe Delivery",
      description:
        "Ensuring every shipment arrives safely with strict quality and security standards.",
      aos: "fade-up",
    },
    {
      icon: <Clock size={42} />,
      title: "On-Time Service",
      description:
        "Fast and punctual logistics services to support your operational and business needs.",
      aos: "fade-up",
    },
  ];

  return (
    <section id="service" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Our Services
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Logistics Solutions We Provide
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            PT Prantara Logistic provides reliable and integrated logistics
            services to help businesses move goods safely, efficiently, and on
            time.
          </p>
        </div>

        {/* Service Cards */}
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-orange-500 mb-5">{service.icon}</div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          {/* 3 Card Pertama */}
          <div className="space-y-6">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
              >
                <div className="text-orange-500 mb-5">{service.icon}</div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* 3 Card Kedua */}
          <div
            className="space-y-6 mt-6"
            data-aos="fade-up"
            data-aos-offset="100"
          >
            {services.slice(3, 6).map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
              >
                <div className="text-orange-500 mb-5">{service.icon}</div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
