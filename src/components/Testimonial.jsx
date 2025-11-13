import React from "react";

const testimonials = [
  {
    name: "Henry Thompson",
    location: "Nottingham",
    text: "Everly transformed my father's life. The caregivers are kind, attentive, and truly compassionate. I am grateful for their dedication and support during this time."
  },
  {
    name: "Sophia Martinez",
    location: "Derby",
    text: "The companionship my grandmother receives from Everly has been life-changing. She now enjoys daily activities and conversations, which have greatly improved her mood and overall well-being. We are truly grateful for their wonderful support."
  },
  {
    name: "Michael Donovan",
    location: "Leicester",
    text: "Our experience with Everly has been outstanding. The caregivers genuinely care about their clients, making a positive impact on our family's life. Thank you!"
  }
];

const Testimonial = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold text-left text-gray-800">
          Real Experiences, Real Results
        </h2>
        <div className="text-center">
          <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
            More Testimonials
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <blockquote className="text-lg font-medium text-gray-600 mb-4">
              "{testimonial.text}"
            </blockquote>
            <div className="flex items-center">
              <p className="text-gray-800">{testimonial.name}</p>
            </div>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
