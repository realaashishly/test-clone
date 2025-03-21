// app/terms-and-conditions/page.js
"use client";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-center text-gray-500 text-sm mb-12">
          Last Updated: 19th March, 2025
        </p>

        {/* Terms Content */}
        <div className="space-y-12">
          {/* Introduction & Acceptance */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Introduction & Acceptance
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Korizen! We’re in <em>Private Alpha</em>, so access is invite-only or via waitlist approval. By using the Platform, you agree to these Terms & Conditions (“Terms”). Don’t agree? Please don’t use it.<br /><br />
              These Terms cover all features—AI Agents, tools, user content, and third-party integrations.
            </p>
          </div>

          {/* Private Alpha Eligibility & Access */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Private Alpha Eligibility & Access
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>Limited Access:</strong> Only invited or waitlist-approved users can join.<br />
              2. <strong>Global Use:</strong> No geo-restrictions, but comply with your local laws.<br />
              3. <strong>No Guarantees:</strong> Access or availability isn’t promised.
            </p>
          </div>

          {/* User Accounts */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. User Accounts
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>Creation:</strong> Register with accurate info for certain features.<br />
              2. <strong>Security:</strong> Keep your credentials safe—you’re responsible for your account.<br />
              3. <strong>Termination:</strong> We can suspend or terminate your account anytime for violations or other reasons, no notice needed.
            </p>
          </div>

          {/* User-Generated Content Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. User-Generated Content Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>Ownership:</strong> Your content (AI Agents, prompts, etc.) stays yours.<br />
              2. <strong>License:</strong> You give us a non-exclusive, royalty-free license to host/display it for alpha operations.<br />
              3. <strong>Prohibited Content:</strong> No porn, hate speech, threats, illegal stuff, or malware.<br />
              4. <strong>Removal:</strong> We can remove violating or harmful content without warning.
            </p>
          </div>

          {/* Pricing & Kredits */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Pricing & Kredits
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>Alpha Pricing:</strong> Experimental—some features free, others need Kredits.<br />
              2. <strong>Kredits:</strong> Virtual currency for paid features; details may shift during alpha.<br />
              3. <strong>No Refunds:</strong> Given the experimental vibe, refunds aren’t guaranteed.
            </p>
          </div>

          {/* AI Tools & Third-Party Integrations */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. AI Tools & Third-Party Integrations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>Third-Party Services:</strong> We use external AI services—we’re not liable for their performance.<br />
              2. <strong>Your Risk:</strong> AI outputs might be off; use them wisely.
            </p>
          </div>

          {/* Disclaimer of Warranties */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>“As Is” Basis:</strong> Platform’s provided “AS IS” and “AS AVAILABLE” in alpha.<br />
              2. <strong>No Promises:</strong> No guarantees against errors, downtime, or AI inaccuracies.<br />
              3. <strong>Your Risk:</strong> Rely on Platform content at your own risk.
            </p>
          </div>

          {/* Limitation of Liability & Indemnification */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Limitation of Liability & Indemnification
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>Limitation:</strong> We’re not liable for any damages (direct, indirect, etc.) from using the Platform, to the max extent allowed by law.<br />
              2. <strong>Indemnification:</strong> You’ll cover us for claims from your misuse, violations, or infringing content.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>Our Rights:</strong> We can cut your access anytime for any reason.<br />
              2. <strong>Post-Termination:</strong> Access stops, and we don’t have to keep your content.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              10. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>Korizen IP:</strong> Our brand, logos, etc., are ours—don’t use without permission.<br />
              2. <strong>Your IP:</strong> Your content’s yours, except for the license in Section 4.<br />
              3. <strong>Feedback:</strong> Suggestions you give us can be used freely to improve Korizen.
            </p>
          </div>

          {/* Governing Law & Dispute Resolution */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              11. Governing Law & Dispute Resolution
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>Stealth Status:</strong> We’re a stealth startup, not yet incorporated—these Terms set expectations.<br />
              2. <strong>Governing Law:</strong> Disputes fall under Patna High Court, India (subject to future incorporation).<br />
              3. <strong>Arbitration:</strong> We might opt for arbitration to resolve disputes efficiently.
            </p>
          </div>

          {/* Changes to Terms */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We can update these Terms anytime, especially in alpha. Keep using the Platform, and you accept the changes.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              13. Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Questions about these Terms? Reach us at:{" "}
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
          Thanks for joining Korizen’s Private Alpha. Your feedback helps us grow—by using the Platform, you agree to these Terms.
        </footer>
      </div>
    </div>
  );
}