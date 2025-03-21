// app/pricing-policy/page.js
"use client";

export default function PricingPolicy() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 tracking-tight">
          Pricing Policy
        </h1>
        <p className="text-center text-gray-500 text-sm mb-12">
          Last Updated: 19th March, 2025
        </p>

        {/* Pricing Policy Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Korizen’s Pricing Policy. This outlines our approach during the Private Alpha phase and beyond. As we refine our platform, this policy may evolve based on your feedback.
            </p>
          </div>

          {/* Private Alpha Status */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Private Alpha Status
            </h2>
            <p className="text-gray-600 leading-relaxed">
              - Access is invite-only<br />
              - Services are free for alpha testers<br />
              - KREDITS are for testing only, with no monetary value<br />
              - No real-money transactions during this phase
            </p>
          </div>

          {/* Purpose of Private Alpha Pricing */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Purpose of Private Alpha Pricing
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Gather feedback on platform functionality",
                "Analyze usage data for future pricing",
                "Test KREDITS system without financials",
                "Refine creator compensation based on insights",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200"
                >
                  <div className="w-6 h-6 bg-indigo-600 text-white flex items-center justify-center rounded-full text-sm font-medium">
                    {index + 1}
                  </div>
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Pricing Structure */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Future Pricing Structure
            </h2>
            <div className="grid gap-6">
              {[
                {
                  title: "KREDITS System",
                  points: [
                    "KREDITS: Our internal currency",
                    "Purchase KREDITS at various tiers",
                    "Use for premium features, AI agents, and content",
                  ],
                },
                {
                  title: "Creator Compensation",
                  points: [
                    "Creators earn a share of KREDITS spent on their work",
                    "Rates finalized post-alpha testing",
                  ],
                },
                {
                  title: "Subscription Options",
                  points: [
                    "Tiers with KREDITS allowances and benefits",
                    "Pricing based on alpha usage data",
                  ],
                },
              ].map((section, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200"
                >
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.points.map((point, i) => (
                      <span key={i}>
                        - {point}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Questions or suggestions about pricing? Reach us at:{" "}
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
          Thank you for joining the Korizen Private Alpha. Your feedback shapes our future pricing.
        </footer>
      </div>
    </div>
  );
}