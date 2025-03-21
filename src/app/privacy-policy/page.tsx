// app/privacy-policy/page.js
"use client";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-500 text-sm mb-12">
          Last Updated: 19th March, 2025
        </p>

        {/* Privacy Policy Content */}
        <div className="space-y-12">
          {/* Opening Statement */}
          <div>
            <p className="text-gray-600 leading-relaxed">
              Thanks for joining Korizen’s Private Alpha! This Privacy Policy explains how we handle your info during this phase. By using the Platform, you’re cool with these practices. If not, no worries—just don’t use it.
            </p>
          </div>

          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              - <strong>Stealth Startup & Alpha Context:</strong> Korizen’s a stealth startup in Private Alpha. We’re not fully incorporated yet, and data we collect helps us test and improve before going big.<br />
              - <strong>Scope:</strong> This applies to all invited or waitlist-approved alpha users.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>Personal Info You Provide:</strong><br />
              - <em>Account Registration:</em> Name, email, username, etc., when you sign up.<br />
              - <em>Kredits & Payment:</em> Payment details (handled by third parties) if you buy Kredits—full card info isn’t stored, just transaction records.<br />
              - <em>Communications:</em> Messages and contact details when you reach out.<br /><br />
              2. <strong>Automatically Collected Info:</strong><br />
              - <em>Usage Data:</em> Pages visited, features used, timestamps, IP address, browser/device info.<br />
              - <em>Cookies:</em> Used to track usage, save preferences, and boost performance.<br /><br />
              3. <strong>User-Generated Content:</strong><br />
              - <em>AI Agents & Files:</em> Content you create/upload (e.g., agents, prompts).<br />
              - <em>Community:</em> Public posts visible to other alpha users (if enabled).<br /><br />
              4. <strong>Third-Party Integrations:</strong><br />
              - <em>AI Providers:</em> Minimal data shared with AI services to run features.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>Run the Platform:</strong> Power accounts, AI agents, chats, etc.<br />
              2. <strong>Improve Services:</strong> Analyze trends, tweak AI, fix bugs.<br />
              3. <strong>Stay in Touch:</strong> Send updates, respond to you.<br />
              4. <strong>Enforce Rules:</strong> Uphold Terms, check fraud.<br />
              5. <strong>Legal Stuff:</strong> Comply with laws if needed.
            </p>
          </div>

          {/* How We Share Your Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. How We Share Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>Service Providers:</strong> Share minimal data with partners (e.g., hosting, payment, AI).<br />
              2. <strong>Legal Needs:</strong> Disclose if law requires or to protect rights/safety.<br />
              3. <strong>Business Changes:</strong> Info may transfer in mergers or sales.<br />
              4. <strong>Your Okay:</strong> Share with your consent for other purposes.
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We keep your info as long as needed for this policy’s goals and the alpha phase. Some data might stick around longer for legal or business reasons.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use solid safeguards to protect your data. But since we’re in alpha, nothing’s 100% secure online—we’re still tightening things up.
            </p>
          </div>

          {/* Your Choices & Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Your Choices & Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              1. <strong>Access & Update:</strong> Check or edit your info via account settings or contact us.<br />
              2. <strong>Opt-Out:</strong> Unsubscribe from non-essential emails, though alpha updates may still come.<br />
              3. <strong>Delete:</strong> Request account deletion—we’ll try, but some data might stay for legit reasons.
            </p>
          </div>

          {/* Children’s Privacy */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Children’s Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Korizen isn’t for kids under 13 (or local age limits). We don’t knowingly collect their data. If we’ve got it by mistake, tell us—we’ll delete it.
            </p>
          </div>

          {/* International Data Transfers */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your data might go global where we or our providers operate. Using Korizen means you’re okay with that, even if data laws differ elsewhere.
            </p>
          </div>

          {/* Changes to This Privacy Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We might tweak this policy anytime, especially in alpha. Changes kick in when posted—keep using Korizen, and you’re in.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Got questions? Hit us up at:{" "}
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
          Thanks for being part of Korizen’s Private Alpha. You’re helping us build something awesome.
        </footer>
      </div>
    </div>
  );
}