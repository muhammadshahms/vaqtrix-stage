"use client"
import BreadCumb from '@/Components/Common/BreadCumb';
import Link from 'next/link';

const TermsConditions = () => {
  return (
    <>
      <BreadCumb
        bgimg="/assets/img/breadcrumb.jpg"
        Title="Terms & Conditions"
      />

      <section className="terms-section">
        <div className="terms-header container_pa_top">
          <h1>Terms & Conditions</h1>
          <p>Last Updated: March 2026</p>
        </div>

        <div className="terms-content">

          {/* 1 */}
          <div className="terms-block">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Vaqtrix ("Company", "we", "our", or "us"). These Terms & Conditions govern your use of our
              website <Link href="https://vaqtrix.com">https://vaqtrix.com</Link> and any services provided by Vaqtrix,
              including but not limited to AI development, website development, app development, digital marketing,
              branding, e-commerce solutions, and related digital services.
            </p>
            <p>
              By accessing or using our website or services, you agree to be bound by these Terms & Conditions. If you
              do not agree with these terms, you should not use our website or services.
            </p>
          </div>

          {/* 2 */}
          <div className="terms-block">
            <h2>2. Use of Our Website</h2>
            <p>You agree to use this website only for lawful purposes and in accordance with these Terms & Conditions.</p>
            <p>You must not:</p>
            <ul className="bullet-list">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to systems or data</li>
              <li>Distribute malware, viruses, or harmful code</li>
              <li>Engage in activities that may damage the website or disrupt services</li>
              <li>Copy, reproduce, or distribute website content without permission</li>
            </ul>
            <p>We reserve the right to suspend or restrict access if misuse is detected.</p>
          </div>

          {/* 3 */}
          <div className="terms-block">
            <h2>3. Services Provided</h2>
            <p>Vaqtrix provides professional digital services including:</p>
            <ul className="bullet-list">
              <li>AI Development</li>
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>Digital Marketing & Branding</li>
              <li>E-commerce Solutions</li>
              <li>E-book Creation</li>
              <li>Automation Systems</li>
            </ul>
            <p>
              Specific service terms, timelines, deliverables, and pricing may be defined in separate project agreements
              or proposals between Vaqtrix and the client.
            </p>
          </div>

          {/* 4 */}
          <div className="terms-block">
            <h2>4. Intellectual Property</h2>
            <p>All content on this website, including but not limited to:</p>
            <ul className="bullet-list">
              <li>Text</li>
              <li>Graphics</li>
              <li>Logos</li>
              <li>Icons</li>
              <li>Images</li>
              <li>Software</li>
              <li>Designs</li>
              <li>Code</li>
            </ul>
            <p>
              is the property of Vaqtrix or its licensors and is protected by copyright, trademark, and intellectual
              property laws.
            </p>
            <p>
              You may not copy, modify, distribute, or use any materials from this website without prior written consent.
              Ownership of project deliverables will be transferred to the client only where explicitly agreed in a
              written service agreement.
            </p>
          </div>

          {/* 5 */}
          <div className="terms-block">
            <h2>5. Payments and Billing</h2>
            <p>Payments for services must be made according to the terms agreed in project proposals or invoices.</p>
            <p>Vaqtrix reserves the right to:</p>
            <ul className="bullet-list">
              <li>Suspend services for unpaid invoices</li>
              <li>Charge late fees where applicable</li>
              <li>Withhold project deliverables until payment obligations are fulfilled</li>
            </ul>
            <p>All pricing is subject to change without prior notice unless agreed within an active contract.</p>
          </div>

          {/* 6 */}
          <div className="terms-block">
            <h2>6. Client Responsibilities</h2>
            <p>Clients agree to:</p>
            <ul className="bullet-list">
              <li>Provide accurate and timely information required for project completion</li>
              <li>Respond to communications and approvals within reasonable timeframes</li>
              <li>Provide necessary access to systems, platforms, or resources where required</li>
            </ul>
            <p>Delays caused by the client may impact project timelines.</p>
          </div>

          {/* 7 */}
          <div className="terms-block">
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Vaqtrix shall not be liable for any indirect, incidental, special,
              or consequential damages arising from the use of our website or services.
            </p>
            <p>This includes, but is not limited to:</p>
            <ul className="bullet-list">
              <li>Loss of profits</li>
              <li>Loss of business opportunities</li>
              <li>Data loss</li>
              <li>Business interruption</li>
            </ul>
            <p>Our total liability shall not exceed the amount paid by the client for the relevant services.</p>
          </div>

          {/* 8 */}
          <div className="terms-block">
            <h2>8. Third-Party Services</h2>
            <p>Our services may integrate or rely on third-party platforms or services such as:</p>
            <ul className="bullet-list">
              <li>Hosting providers</li>
              <li>Payment gateways</li>
              <li>Analytics tools</li>
              <li>Social media platforms</li>
              <li>Advertising networks</li>
            </ul>
            <p>Vaqtrix is not responsible for the policies, reliability, or availability of these third-party services.</p>
          </div>

          {/* 9 */}
          <div className="terms-block">
            <h2>9. Confidentiality</h2>
            <p>
              Both Vaqtrix and the client agree to maintain confidentiality regarding any proprietary or sensitive
              information shared during the course of a project.
            </p>
            <p>
              Confidential information shall not be disclosed to third parties without prior written consent unless
              required by law.
            </p>
          </div>

          {/* 10 */}
          <div className="terms-block">
            <h2>10. Termination</h2>
            <p>Vaqtrix reserves the right to terminate services or access to the website if:</p>
            <ul className="bullet-list">
              <li>These Terms & Conditions are violated</li>
              <li>Fraudulent or unlawful activity is detected</li>
              <li>Payments are not fulfilled</li>
            </ul>
            <p>Clients may terminate services according to the terms defined in their service agreement.</p>
          </div>

          {/* 11 */}
          <div className="terms-block">
            <h2>11. Disclaimer</h2>
            <p>
              The information provided on this website is for general informational purposes only. While we strive to
              ensure accuracy, Vaqtrix does not guarantee that the website content is complete, accurate, or up to date.
            </p>
            <p>Use of the website and reliance on its information is at your own risk.</p>
          </div>

          {/* 12 */}
          <div className="terms-block">
            <h2>12. Changes to These Terms</h2>
            <p>Vaqtrix reserves the right to update or modify these Terms & Conditions at any time.</p>
            <p>
              Any changes will be posted on this page with an updated revision date. Continued use of the website after
              changes are made indicates acceptance of the updated terms.
            </p>
          </div>

          {/* 13 */}
          <div className="terms-block">
            <h2>13. Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed and interpreted in accordance with applicable international
              commercial laws.
            </p>
            <p>
              Any disputes arising from the use of our services shall be resolved through appropriate legal channels.
            </p>
          </div>

          {/* 14 */}
          <div className="terms-block">
            <h2>14. Contact Information</h2>
            <p>If you have questions about these Terms & Conditions, please contact us:</p>
            <ul className="bullet-list">
              <li>
                Website: <Link href="https://vaqtrix.com">https://vaqtrix.com</Link>
              </li>
              <li>
                Email: <Link href="mailto:support@vaqtrix.com">support@vaqtrix.com</Link>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <style jsx>{`
        .terms-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 20px;
          line-height: 1.8;
        }

        .bullet-list {
          list-style-type: disc !important;
          list-style-position: outside !important;
          margin: 0 0 1.5rem 1.5rem;
          padding-left: 20px;
          color: #000;
        }

        .bullet-list li {
          display: list-item !important;
          margin-bottom: 8px;
          font-size: 1rem;
          text-align: justify;
        }

        .terms-header {
          display: grid;
          justify-content: center;
          margin-bottom: 74px;
        }

        .terms-header h1 {
          display: grid;
          justify-content: center;
        }

        .terms-header p {
          display: grid;
          justify-content: center;
        }

        .terms-header h1,
        .terms-block h2,
        p,
        li {
          color: #000;
        }

        .terms-block {
          margin-top: 40px;
        }

        .terms-block h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 15px;
          border-left: 4px solid #1C4401;
          padding-left: 10px;
        }
      `}</style>
    </>
  );
}

export default TermsConditions;
