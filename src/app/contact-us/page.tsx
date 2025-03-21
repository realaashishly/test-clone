// app/contact-us/page.js
"use client";

export default function ContactUs() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight">
          Contact Us
        </h1>

        {/* Contact Us Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Get in Touch
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We’d love to hear from you! Whether it’s feedback, questions, or support during our Private Alpha phase, reach out anytime. Your thoughts help us make Korizen better.
            </p>
          </div>

          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Contact Methods
            </h2>
            <div className="grid gap-6">
              {/* Email */}
              <div className="p-6 bg-gray-50 rounded-lg transition-all hover:bg-gray-100">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">
                  Drop us a line at:{" "}
                  <a
                    href="mailto:thekorizenapp@gmail.com"
                    className="text-indigo-600 hover:text-indigo-700 transition duration-200"
                  >
                    thekorizenapp@gmail.com
                  </a>
                </p>
              </div>
              {/* Telegram */}
              <div className="p-6 bg-gray-50 rounded-lg transition-all hover:bg-gray-100">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Telegram</h3>
                <p className="text-gray-600">
                  Chat with us on Telegram:{" "}
                  <a
                    href="https://t.me/KorizenOS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 transition duration-200"
                  >
                    KorizenOS
                  </a>
                </p>
              </div>
              {/* Indian Office Address */}
              <div className="p-6 bg-gray-50 rounded-lg transition-all hover:bg-gray-100">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Our Address</h3>
                <p className="text-gray-600">
                  Rajabazar, Samanpura, <br />
                  Opposite West Point Public School, <br />
                  Patna - 14, Bihar, India
                </p>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Response Time
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We’re working hard to perfect Korizen during this Private Alpha. Expect a reply within 48-72 hours, though it might take a bit longer as we fine-tune things. Thanks for your patience!
            </p>
          </div>

          {/* Additional Notes */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Additional Notes
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your input shapes Korizen’s future. For urgent matters, add "URGENT" to your email or Telegram message. Contact methods may evolve as we grow.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-12 pt-6 border-t border-gray-200">
          Thank you for joining the Korizen Private Alpha. Together, we’re building something great.
        </footer>
      </div>
    </div>
  );
}