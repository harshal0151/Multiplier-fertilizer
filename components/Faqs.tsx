"use client";
import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react'
import { useState } from 'react';

const Faqs = () => {

      const [openFaq, setOpenFaq] = useState<number | null>(null);
    
      const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
      };
    

     const faqs = [
    {
      question: "What makes AgroFertil fertilizers different from others?",
      answer:
        "Our fertilizers are scientifically formulated with premium ingredients and undergo rigorous quality testing. We use advanced nutrient delivery systems that ensure maximum absorption and long-lasting effects, resulting in better crop yields and soil health.",
    },
    {
      question: "Are your fertilizers safe for organic farming?",
      answer:
        "Yes, we offer a complete range of organic fertilizers that are certified for organic farming. Our organic products are made from 100% natural ingredients and comply with all organic farming standards and regulations.",
    },
    {
      question: "How do I choose the right fertilizer for my crops?",
      answer:
        "The choice depends on your crop type, soil conditions, and growth stage. We recommend conducting a soil test first. Our technical team is available to provide personalized recommendations based on your specific needs and farming conditions.",
    },
  ];
  return (

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="text-green-600 flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-green-600 flex-shrink-0" size={20} />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Faqs