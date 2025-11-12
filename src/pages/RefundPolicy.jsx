import React from "react";
import "./RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="policy-container">
      <div className="policy-content">
        <h1>Refund and Cancellation Policy</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. General Policy</h2>
          <p>
            NGO-CONNECT is a non-profit organization dedicated to supporting charitable causes. All donations made through our platform are considered final contributions to our charitable programs and initiatives.
          </p>
        </section>

        <section>
          <h2>2. Donation Refunds</h2>
          <h3>2.1 Refund Eligibility</h3>
          <p>
            Refunds may be considered in the following exceptional circumstances:
          </p>
          <ul>
            <li>Technical errors resulting in duplicate transactions</li>
            <li>Unauthorized use of payment card</li>
            <li>Processing errors by the payment gateway</li>
            <li>Donation made by mistake (within 24 hours of transaction)</li>
          </ul>

          <h3>2.2 Refund Process</h3>
          <p>To request a refund, please contact us within 7 days of the transaction with:</p>
          <ul>
            <li>Transaction ID or receipt number</li>
            <li>Date and amount of donation</li>
            <li>Reason for refund request</li>
            <li>Payment method used</li>
          </ul>

          <h3>2.3 Refund Timeline</h3>
          <p>
            Approved refunds will be processed within 7-14 business days. The refund will be credited to the original payment method used for the donation.
          </p>
        </section>

        <section>
          <h2>3. Non-Refundable Donations</h2>
          <p>The following donations are generally non-refundable:</p>
          <ul>
            <li>Donations made more than 7 days ago</li>
            <li>Donations that have already been allocated to specific programs</li>
            <li>Donations made for specific events that have already occurred</li>
            <li>Donations where tax benefits have been claimed</li>
          </ul>
        </section>

        <section>
          <h2>4. Payment Gateway Issues</h2>
          <p>
            If you experience any issues with payment processing through Razorpay, please contact our support team immediately. We will investigate and resolve payment-related issues promptly.
          </p>
        </section>

        <section>
          <h2>5. Cancellation of Recurring Donations</h2>
          <p>
            If you have set up a recurring donation, you can cancel it at any time by:
          </p>
          <ul>
            <li>Logging into your account and managing your subscription</li>
            <li>Contacting our support team</li>
            <li>Contacting Razorpay support</li>
          </ul>
          <p>
            Cancellation will take effect from the next billing cycle. Previous donations will not be refunded.
          </p>
        </section>

        <section>
          <h2>6. Tax Deduction Implications</h2>
          <p>
            If you have claimed tax deductions under Section 80G for your donation and subsequently receive a refund, you may need to revise your tax returns. Please consult with a tax advisor for guidance.
          </p>
        </section>

        <section>
          <h2>7. Dispute Resolution</h2>
          <p>
            If you have a dispute regarding a donation or refund, please contact us first. We will work with you to resolve the issue amicably. If a resolution cannot be reached, the matter may be referred to appropriate legal channels.
          </p>
        </section>

        <section>
          <h2>8. Contact for Refunds</h2>
          <p>To request a refund or for refund-related inquiries, please contact:</p>
          <ul>
            <li>Email: refunds@ngoconnect.org</li>
            <li>Phone: +91-XXXXXXXXXX</li>
            <li>Address: NGO-CONNECT, [Your Address]</li>
            <li>Hours: Monday to Friday, 9:00 AM to 6:00 PM IST</li>
          </ul>
        </section>

        <section>
          <h2>9. Changes to Refund Policy</h2>
          <p>
            We reserve the right to modify this Refund Policy at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the modified policy.
          </p>
        </section>

        <section>
          <h2>10. Acknowledgment</h2>
          <p>
            By making a donation through NGO-CONNECT, you acknowledge that you have read, understood, and agree to this Refund and Cancellation Policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;

