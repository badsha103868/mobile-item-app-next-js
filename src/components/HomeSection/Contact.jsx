import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-8 text-gray-700">
          Have questions? Reach out to us and we'll get back to you promptly.
        </p>

        <form className="max-w-2xl mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-left mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="border w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-left mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="border w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-left mb-1 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your message..."
              className="border w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
