"use client";
import { CheckCircle, Send } from "lucide-react";
import { resolve } from "path";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)
    setIsSubmitting(true);
    // Simulate API call
    // await new Promise(resolve => setTimeout(resolve, 1500));
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': "application.json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);

        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });

        // Reset form
        // Reset submission status after a delay
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setIsSubmitted(false);
      }
    } catch (error) {
      setIsSubmitted(false);
    }
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 md:space-y-6 mt-7 max-w-full md:max-w-6xl w-full px-2 sm:px-4 md:px-0"
    >
      <div className="mb-4 md:mb-10">
        <p className="text-white text-lg md:text-xl">Personal Information</p>
        <span className="h-[1.5px] w-[42px] bg-white block"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
        <div>
          <label
            htmlFor="name"
            className="block text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 md:px-4 py-2 md:py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300 text-sm md:text-base"
            placeholder=""
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 md:px-4 py-2 md:py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300 text-sm md:text-base"
            placeholder=""
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-3 md:px-4 py-2 md:py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300 text-sm md:text-base"
          placeholder=""
        />
      </div>
      <div className="mb-4 md:mb-10 mt-4 md:mt-10">
        <p className="text-white text-lg md:text-xl">Write to us</p>
        <span className="h-[1.5px] w-[42px] bg-white block"></span>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 md:px-4 py-2 md:py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base"
          placeholder="Tell us about your project and goals..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className={`w-full sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[20%] px-4 md:px-6 py-3 md:py-4 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center text-sm md:text-base hover:cursor-pointer
                    ${
                      isSubmitted
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gradient-to-r from-blue-400 to-black hover:from-black hover:to-blue-400 shadow-lg hover:shadow-blue-500/30"
                    } transform hover:scale-[1.02]`}
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            <span className="hidden sm:inline">Sending...</span>
            <span className="sm:hidden">...</span>
          </>
        ) : isSubmitted ? (
          <>
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            <span className="hidden sm:inline">Message Sent!</span>
            <span className="sm:hidden">Sent!</span>
          </>
        ) : (
          <>
            <span className="inline">Submit</span>
            {/* <span className="sm:hidden">Submit</span> */}
            <Send className="w-4 h-4 md:w-5 md:h-5 ml-2" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
