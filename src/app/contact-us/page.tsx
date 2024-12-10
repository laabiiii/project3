export default function Contact() {
  return (
    <div className="py-10 bg-gray-50">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-10">
        We'd love to hear from you! Please fill out the form below.
      </p>

      {/* Contact Form */}
      <div className="container mx-auto">
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Additional Contact Info */}
      <div className="text-center mt-12">
        <p className="text-gray-600">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@elitefood.com"
            className="text-blue-500 hover:underline"
          >
            info@elitefood.com
          </a>
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Phone:</strong> +1 (234) 567-890
        </p>
      </div>
    </div>
  );
}
