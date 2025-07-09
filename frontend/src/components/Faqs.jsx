import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const faqData = [
  {
    question: "What types of furniture do you offer?",
    answer:
      "We offer a wide range of furniture for every space in your home or office — including sofas, beds, dining tables, chairs, wardrobes, coffee tables, storage units, work desks, and more.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major payment methods including credit/debit cards, UPI, net banking, wallets, and EMI options.",
  },
  {
    question: "Can I track my furniture delivery?",
    answer:
      "Yes, once your order is shipped, you'll receive a tracking link via email or SMS.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day return window for eligible products with free pickup for damaged or incorrect items.",
  },
  {
    question: "What materials are used in your furniture?",
    answer:
      "We use solid wood, engineered wood, metal, and premium fabrics/leatherette with full specifications listed on each product.",
  },
  {
    question: "Are there any discounts or promotions available?",
    answer:
      "Yes! We offer seasonal discounts, combo offers, and special deals for newsletter subscribers.",
  },
];

const Faqs = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleFaq = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="py-6">
      <div className="md:max-w-[80%] p-2 mx-auto flex flex-col justify-center items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-[2px] bg-yellow-600" />
          <p>FAQs</p>
        </div>
        <p className="text-2xl pb-4 font-medium">
          Questions? <span className="text-[#224A26]">Look here.</span>
        </p>
        <ul className="md:w-[60%] flex flex-col gap-2">
          {faqData.map((faq, index) => (
            <li
              key={index}
              onClick={() => toggleFaq(index)}
              className={`cursor-pointer transition-all duration-300 p-4 rounded-xl border border-gray-200 shadow-md flex flex-col gap-2 ${
                visibleIndex === index ? "bg-[#224A26] text-white" : "bg-white"
              }`}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{faq.question}</p>
                <FontAwesomeIcon
                  icon={visibleIndex === index ? faMinus : faPlus}
                />
              </div>
              {visibleIndex === index && (
                <p className="text-sm text-white">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faqs;
