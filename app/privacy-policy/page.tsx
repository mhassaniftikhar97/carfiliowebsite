import React from 'react'
import Header from '../components/Header'

const PrivacyPolicyPage = () => {
  return (
    <div className="flex justify-center py-16 px-4 bg-white">
        <Header />
      <div className="max-w-4xl xl:mt-24 mt-10 w-full">
        <h1 className="text-4xl font-bold text-center mb-2">Privacy Policy</h1>
        <p className="text-center text-gray-600 mb-8">Effective Date: April 11, 2025</p>
        
        <div className="mb-8">
          <p className="mb-4">At Carfilio (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we value your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://carfilio.com (the &quot;Website&quot;), and outlines your rights and choices with respect to your personal data.</p>
          <p className="mb-4">By using our Website, you consent to the practices described in this Privacy Policy.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="mb-3">We may collect the following types of information when you interact with our Website:</p>
          <h3 className="text-xl font-semibold mb-2">a. Personal Information</h3>
          <p className="mb-3">Information that identifies you as an individual, such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name</li>
            <li>Any other information you voluntarily provide via forms or emails</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">b. Usage Data</h3>
          <p className="mb-3">Information automatically collected when you access the Website, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Device identifiers</li>
            <li>Referring website</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">c. Cookies and Tracking Technologies</h3>
          <p className="mb-3">We use cookies and similar technologies to enhance your browsing experience and analyze Website traffic. You can control or disable cookies through your browser settings.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="mb-3">We may use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries and provide customer support</li>
            <li>Deliver product updates or newsletters</li>
            <li>Improve our Website, services, and marketing</li>
            <li>Comply with legal obligations</li>
            <li>Detect and prevent fraudulent activity or misuse of our Website</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">3. Sharing Your Information</h2>
          <p className="mb-3">We do not sell or rent your personal information. We may share your data only in the following situations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service Providers: With trusted vendors that help us operate our Website (e.g., email services, analytics tools)</li>
            <li>Legal Compliance: If required by law or legal process</li>
            <li>Business Transfers: In connection with a merger, acquisition, or sale of company assets</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">4. Your Rights & Choices</h2>
          <p className="mb-3">Depending on your location, you may have rights such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Accessing the personal information we hold about you</li>
            <li>Requesting corrections or deletions</li>
            <li>Opting out of marketing emails (you can unsubscribe anytime)</li>
            <li>Limiting certain data uses</li>
          </ul>
          <p className="mt-3">To exercise your rights, please contact us at info@carfilio.com.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p className="mb-3">We use reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">6. Third-Party Links</h2>
          <p className="mb-3">Our Website may contain links to third-party websites or services. We are not responsible for their privacy practices. Please review their policies before submitting personal information.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">7. Children&apos;s Privacy</h2>
          <p className="mb-3">Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">8. Updates to This Policy</h2>
          <p className="mb-3">We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new effective date. Continued use of the Website after changes means you accept the updated policy.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p className="mb-3">If you have any questions about this Privacy Policy, please contact us at:</p>
          <div className="pl-4 border-l-4 border-gray-200 py-2">
            <p className="font-medium">Carfilio</p>
            <p>320 Northern Blvd, Suite 21</p>
            <p>Great Neck, NY 11021</p>
            <p className="mt-2">Email: <a href="mailto:info@carfilio.com" className="text-blue-600 hover:underline">info@carfilio.com</a></p>
            <p>Phone: 212-281-3007</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage