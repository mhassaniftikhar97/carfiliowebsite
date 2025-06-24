import React from 'react'
import Header from '../components/Header'

const TermsOfUsePage = () => {
  return (
    <div className="flex justify-center py-16 px-4 bg-white">
        <Header />
      <div className="max-w-4xl xl:mt-24 mt-10 w-full">
        <h1 className="text-4xl font-bold text-center mb-2">Website Terms of Use</h1>
        <p className="text-center text-gray-600 mb-8">Effective Date: April 11, 2025</p>
        
        <div className="mb-8">
          <p className="mb-4">Welcome to Carfilio.com (&quot;Website&quot;). These Terms of Use (&quot;Terms&quot;) govern your access to and use of our website, products, and services (collectively, the &quot;Services&quot;). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, please do not use the Website.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">1. Use of Website</h2>
          <p className="mb-3">You may use the Website solely for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Website in any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website or server.</li>
            <li>Use any automated means to access the Website for any purpose without our express written permission.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">2. Intellectual Property</h2>
          <p className="mb-3">All content on this Website, including text, graphics, logos, images, software, and other materials, is the property of Carfilio or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without express written consent.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">3. User Content</h2>
          <p className="mb-3">If you submit any content, feedback, or suggestions, you grant Carfilio a worldwide, royalty-free, perpetual license to use, reproduce, modify, and display such content for any purpose.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">4. Software Promotion & Third-Party Links</h2>
          <p className="mb-3">This Website promotes software intended for use by auto dealerships. We may include links to third-party sites, software vendors, or partners. We do not control and are not responsible for the content or practices of these third-party sites. Your use of third-party services is subject to their terms.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">5. Disclaimer of Warranties</h2>
          <p className="mb-3">The Website and its content are provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. Carfilio does not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components. All use of the Website is at your own risk.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
          <p className="mb-3">To the fullest extent permitted by law, Carfilio and its affiliates will not be liable for any direct, indirect, incidental, or consequential damages arising out of your use or inability to use the Website.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">7. Indemnification</h2>
          <p className="mb-3">You agree to indemnify, defend, and hold harmless Carfilio, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, obligations, or expenses arising out of your use of the Website or your violation of these Terms.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">8. Modifications</h2>
          <p className="mb-3">We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Your continued use of the Website after changes are posted constitutes your acceptance.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">9. Governing Law</h2>
          <p className="mb-3">These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law principles.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
          <p className="mb-3">If you have any questions about these Terms, please contact us at:</p>
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

export default TermsOfUsePage
