import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="policy-container">
      <div className="policy-content">
        <h1>Terms and Conditions</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the NGO-CONNECT website ("the Website"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2>2. Use of Website</h2>
          <h3>2.1 Eligibility</h3>
          <p>You must be at least 18 years old to use our services. By using this website, you represent that you meet this age requirement.</p>

          <h3>2.2 Permitted Use</h3>
          <p>You agree to use the Website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the Website in any way that violates applicable laws</li>
            <li>Attempt to gain unauthorized access to any part of the Website</li>
            <li>Interfere with or disrupt the Website or servers</li>
            <li>Transmit any viruses, malware, or harmful code</li>
            <li>Use automated systems to access the Website without permission</li>
          </ul>
        </section>

        <section>
          <h2>3. Donations and Payments</h2>
          <h3>3.1 Donation Process</h3>
          <p>
            All donations made through our website are processed securely via Razorpay payment gateway. By making a donation, you agree to provide accurate payment information.
          </p>

          <h3>3.2 Payment Terms</h3>
          <ul>
            <li>All donations are final and non-refundable unless otherwise stated</li>
            <li>Donation amounts are in Indian Rupees (INR)</li>
            <li>You will receive a receipt for your donation via email</li>
            <li>We reserve the right to refuse or cancel any donation</li>
          </ul>

          <h3>3.3 Tax Deductions</h3>
          <p>
            Donations may be eligible for tax deductions under Section 80G of the Income Tax Act, 1961. We will provide necessary documentation for tax purposes.
          </p>
        </section>

        <section>
          <h2>4. User Accounts</h2>
          <p>If you create an account on our website, you are responsible for:</p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Providing accurate and complete information</li>
            <li>Notifying us immediately of any unauthorized use</li>
          </ul>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of NGO-CONNECT or its content suppliers and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.
          </p>
        </section>

        <section>
          <h2>6. Disclaimer of Warranties</h2>
          <p>
            The Website is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Website will be uninterrupted, secure, or error-free.
          </p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, NGO-CONNECT shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website or services.
          </p>
        </section>

        <section>
          <h2>8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless NGO-CONNECT, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of the Website or violation of these Terms.
          </p>
        </section>

        <section>
          <h2>9. Third-Party Services</h2>
          <p>
            Our Website may use third-party services, including payment processors (Razorpay). Your use of these services is subject to their respective terms and conditions. We are not responsible for the practices of third-party service providers.
          </p>
        </section>

        <section>
          <h2>10. Modification of Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the Website. Your continued use of the Website after changes constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2>11. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the Website at any time, without prior notice, for any reason, including violation of these Terms.
          </p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in [Your City], India.
          </p>
        </section>

        <section>
          <h2>13. Contact Information</h2>
          <p>For any questions regarding these Terms and Conditions, please contact us:</p>
          <ul>
            <li>Email: support@ngoconnect.org</li>
            <li>Phone: +91-XXXXXXXXXX</li>
            <li>Address: NGO-CONNECT, [Your Address]</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;

