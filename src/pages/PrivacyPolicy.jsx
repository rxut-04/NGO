import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <div className="policy-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            NGO-CONNECT ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>We may collect the following personal information:</p>
          <ul>
            <li>Name and contact information (email address, phone number)</li>
            <li>Payment information (processed securely through Razorpay)</li>
            <li>Donation history and preferences</li>
            <li>Account credentials (for registered users)</li>
          </ul>

          <h3>2.2 Non-Personal Information</h3>
          <p>We automatically collect certain information when you visit our website:</p>
          <ul>
            <li>Browser type and version</li>
            <li>IP address</li>
            <li>Pages visited and time spent on pages</li>
            <li>Device information</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To process donations and payments</li>
            <li>To send donation receipts and acknowledgments</li>
            <li>To communicate with you about our programs and activities</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
            <li>To prevent fraud and ensure security</li>
          </ul>
        </section>

        <section>
          <h2>4. Payment Processing</h2>
          <p>
            All payment transactions are processed securely through Razorpay, a PCI-DSS compliant payment gateway. We do not store your complete payment card details on our servers. Your payment information is encrypted and transmitted securely to Razorpay for processing.
          </p>
        </section>

        <section>
          <h2>5. Data Sharing and Disclosure</h2>
          <p>We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:</p>
          <ul>
            <li>With payment processors (Razorpay) to complete transactions</li>
            <li>With service providers who assist in our operations</li>
            <li>When required by law or legal process</li>
            <li>To protect our rights and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section>
          <h2>8. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
          </p>
        </section>

        <section>
          <h2>10. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>
        </section>

        <section>
          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li>Email: privacy@ngoconnect.org</li>
            <li>Phone: +91-XXXXXXXXXX</li>
            <li>Address: NGO-CONNECT, [Your Address]</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

