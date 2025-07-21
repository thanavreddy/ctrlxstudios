"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const Pricing = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const pricingPlans = [
    {
      name: "Startup",
      price: "$2,499",
      period: "one-time",
      description: "Perfect for new businesses looking to establish their digital presence",
      features: [
        "Logo Design & Brand Guidelines",
        "5-Page Website Design",
        "Mobile Responsive Design",
        "Basic SEO Optimization",
        "2 Rounds of Revisions",
        "1 Month Support"
      ],
      popular: false,
      cta: "Get Started",
      color: "blue"
    },
    {
      name: "Growth",
      price: "$4,999",
      period: "one-time",
      description: "Ideal for growing businesses ready to scale their brand",
      features: [
        "Everything in Startup",
        "Social Media Kit (10 templates)",
        "Marketing Materials Design",
        "Advanced SEO Optimization",
        "E-commerce Integration",
        "3 Months Support",
        "Content Management Training"
      ],
      popular: true,
      cta: "Most Popular",
      color: "purple"
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "one-time",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Growth",
        "Custom Web Application",
        "Video & Motion Graphics",
        "Advanced Analytics Setup",
        "Multi-language Support",
        "6 Months Support",
        "Priority Support & Updates"
      ],
      popular: false,
      cta: "Contact Us",
      color: "green"
    }
  ];

  const developmentServices = [
    {
      name: "Landing Page",
      price: "$1,999",
      features: [
        "Responsive Design (Desktop/Tablet/Mobile)",
        "Contact Forms & Lead Capture",
        "SEO Optimization",
        "Performance Optimization",
        "2-Week Delivery"
      ]
    },
    {
      name: "Multi-Page Website",
      price: "$4,999",
      features: [
        "Up to 10 Custom Pages",
        "CMS Integration",
        "E-commerce Ready",
        "Advanced Animations",
        "4-Week Delivery"
      ]
    },
    {
      name: "Custom Web App",
      price: "Starting at $9,999",
      features: [
        "Custom Functionality",
        "Database Integration",
        "User Authentication",
        "Admin Dashboard",
        "8-12 Week Delivery"
      ]
    }
  ];

  return (
    <section className="py-14 px-6 md:px-12" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <p className="text-blue-300 text-lg font-medium">Pricing</p>
            <span className="h-[2px] w-12 bg-blue-300 block mx-auto mt-2"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 font-[Poppins]">
            Transparent Pricing for
            <br />
            Every Business Need
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan that fits your budget and requirements. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Design Packages */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-12 text-center font-[Poppins]">
            Design Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative p-8 rounded-2xl border ${
                  plan.popular
                    ? "bg-blue-700/10 border border-blue-400/20"
                    : "border-gray-700 bg-white/5"
                } backdrop-blur-sm  transition-all duration-300 group`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-700/10 to-blue-300/30 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-2xl font-semibold text-white mb-2 font-[Poppins]">
                    {plan.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  className={`w-full inline-flex py-3  items-center  justify-center rounded-lg font-medium transition-all duration-300 hover:cursor-pointer ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white "
                      : "bg-blue-600 hover:bg-blue-700 text-white "
                  }`}
                  // onClick={()=> redirect('/contact')} 
                  href="/contact"
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-12 text-center font-[Poppins]">
            Development Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developmentServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl border border-gray-700/50 bg-white/5 backdrop-blur-sm  transition-all duration-300 group"
              >
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-2 font-[Poppins]">
                    {service.name}
                  </h4>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-blue-300">{service.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* <button className="w-full py-2 rounded-lg border border-blue-600 text-blue-300 hover:bg-blue-600 hover:text-white transition-all duration-300 group-hover:scale-105">
                  Learn More
                </button> */}
                <button className="btn-17 z-10">
  <span className="text-container">
    <span className="text">Get Quote</span>
  </span>
</button>

              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-blue-700/30 border border-blue-400/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-4 font-[Poppins]">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements and create a tailored solution that fits your needs perfectly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
          >
            Get Custom Quote
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
