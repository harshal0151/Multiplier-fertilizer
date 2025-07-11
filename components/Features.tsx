import { Shield, Truck, Award, Leaf, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description:
        "All our products undergo rigorous testing to ensure the highest quality and effectiveness for your crops.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery service to get your fertilizers to you when you need them most.",
    },
    {
      icon: Award,
      title: "Expert Formulation",
      description:
        "Developed by agricultural scientists with decades of experience in crop nutrition.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description:
        "Environmentally responsible formulations that protect soil health and ecosystem balance.",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description:
        "Our agricultural experts are available round the clock to provide guidance and support.",
    },
    {
      icon: Zap,
      title: "Fast Results",
      description:
        "See visible improvements in your crops within days of application with our advanced formulations.",
    },
  ];

  return (
    <section id="about" className="px-4 py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20 px-4">
           <h2 className="sm:text-5xl text-4xl p-3  font-semibold w-full text-center">
          Our <span className="text-green-700 font-semibold">Services</span>
        </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to helping farmers achieve exceptional results with our
            premium fertilizers and comprehensive support services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4">
  {features.map((feature, index) => (
    <div
      key={index}
      className="group text-center p-4 sm:p-5 rounded-xl border border-gray-200 hover:shadow-lg hover:border-green-400 transition-all duration-300 bg-white"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-green-200 transition duration-300">
        <feature.icon className="text-green-600" size={22} />
      </div>
      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
        {feature.title}
      </h3>
    </div>
  ))}
</div>


        {/* CTA Section */}
        <div className="mt-14 sm:mt-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl px-6 py-10 sm:py-14 md:px-20 text-white text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Ready to Transform Your Farm?
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful farmers who trust AgroFertil for their crop nutrition needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-green-600 px-5 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-5 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
              Contact Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
