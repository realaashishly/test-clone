// app/digital-delivery-policy/page.js
"use client";

export default function DigitalDeliveryPolicy() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 tracking-tight">
          Digital Delivery Policy
        </h1>
        <p className="text-center text-gray-500 text-sm mb-12">
          Last Updated: 19th March, 2025
        </p>

        {/* Digital Delivery Policy Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This Digital Delivery Policy explains how you access digital content and services on Korizen. We’re in Private Alpha, so expect updates as we tweak things based on your feedback.
            </p>
          </div>

          {/* Digital Nature of Services */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Digital Nature of Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Korizen is 100% digital—no physical stuff here. Everything’s delivered through our website and services.
            </p>
          </div>

          {/* Types of Digital Delivery */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Types of Digital Delivery
            </h2>
            <div className="space-y-6">
              {/* AI Agents */}
              <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200">
                <h3 className="text-lg font-medium text-gray-800 mb-2">AI Agents</h3>
                <p className="text-gray-600 leading-relaxed">
                  - Accessible directly on Korizen<br />
                  - Outputs viewable on-site or sent to Google Docs, Sheets, WhatsApp, Telegram, etc.<br />
                  - Usage depends on your KREDITS balance
                </p>
              </div>
              {/* AI Art Prompts */}
              <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200">
                <h3 className="text-lg font-medium text-gray-800 mb-2">AI Art Prompts</h3>
                <p className="text-gray-600 leading-relaxed">
                  - Viewable on the platform<br />
                  - Copyable for personal use after purchase<br />
                  - No downloadable files provided
                </p>
              </div>
              {/* AI Video Prompts */}
              <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200">
                <h3 className="text-lg font-medium text-gray-800 mb-2">AI Video Prompts</h3>
                <p className="text-gray-600 leading-relaxed">
                  - Viewable on the platform<br />
                  - Copyable for personal use after purchase<br />
                  - No downloadable files provided
                </p>
              </div>
            </div>
          </div>

          {/* Immediate Delivery */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Immediate Delivery
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Delivery happens instantly after:<br />
              - A successful KREDIT transaction<br />
              - Account authorization<br />
              - Meeting any specific requirements
            </p>
          </div>

          {/* Access Methods */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Access Methods
            </h2>
            <p className="text-gray-600 leading-relaxed">
              - Via the Korizen website when logged in<br />
              - Through integrations like Google Docs or messaging platforms (if offered)
            </p>
          </div>

          {/* Technical Requirements */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Technical Requirements
            </h2>
            <p className="text-gray-600 leading-relaxed">
              - Use a modern, updated web browser<br />
              - Stable internet connection required<br />
              - Check feature-specific requirements in our docs
            </p>
          </div>

          {/* User Support */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. User Support
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Trouble accessing services?<br />
              - Use our in-platform help center<br />
              - Email us at{" "}
              <a
                href="mailto:thekorizenapp@gmail.com"
                className="text-indigo-600 hover:text-indigo-700 transition duration-200"
              >
                thekorizenapp@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-12 pt-6 border-t border-gray-200">
          Thanks for being part of Korizen’s Private Alpha. Your input helps us perfect our digital delivery.
        </footer>
      </div>
    </div>
  );
}