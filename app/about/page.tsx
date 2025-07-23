"use client";

import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function About() {
  return (
    <>
      <WhatsAppFloat />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About AgroFertil</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              For over two decades, we&apos;ve been dedicated to revolutionizing
              agriculture through innovative fertilizer solutions that enhance
              crop productivity while maintaining environmental sustainability.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Founded in 2004, AgroFertil began as a small family business
                  with a simple mission: to provide farmers with the highest
                  quality fertilizers that would help them achieve exceptional
                  crop yields while caring for the environment.
                </p>
                <p className="mb-6">
                  What started in a small facility has grown into one of the
                  leading fertilizer manufacturers in the region. Our commitment
                  to research, innovation, and customer satisfaction has driven
                  our growth and success over the years.
                </p>
                <p>
                  Today, we serve thousands of farmers across the country, from
                  small family farms to large agricultural enterprises,
                  providing tailored solutions that meet the unique needs of
                  each operation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        {/* <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: 'Sustainability', desc: 'Committed to environmentally responsible farming practices' },
              { icon: Award, title: 'Quality', desc: 'Premium products that meet the highest industry standards' },
              { icon: Users, title: 'Partnership', desc: 'Building lasting relationships with farmers and communities' },
              { icon: Shield, title: 'Trust', desc: 'Reliable products and services you can depend on' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

        <Features />

        {/* Privacy Policy */}
        <section className="py-6 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
                Privacy Policy
              </h2>

              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                    Information We Collect
                  </h3>
                  <p>
                    We collect information you provide directly to us, such as
                    when you create an account, make a purchase, or contact us
                    for support. This may include your name, email address,
                    phone number, shipping address, and payment information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                    How We Use Your Information
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process and fulfill your orders</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>
                      Send important updates about your orders and account
                    </li>
                    <li>Improve our products and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                    Information Sharing
                  </h3>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent, except as
                    described in this policy. We may share information with
                    trusted partners who assist us in operating our website and
                    conducting business.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                    Data Security
                  </h3>
                  <p>
                    We implement appropriate security measures to protect your
                    personal information against unauthorized access,
                    alteration, disclosure, or destruction. However, no method
                    of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                    Contact Us
                  </h3>
                  <p>
                    If you have any questions about this Privacy Policy, please
                    contact us at
                    <strong> privacy@agrofertil.com</strong> or call us at{" "}
                    <strong>+1 (555) 123-4567</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Faqs />
      </div>
    </>
  );
}
