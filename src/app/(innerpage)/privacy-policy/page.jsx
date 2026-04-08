"use client"
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <>
      <BreadCumb
        bgimg="/assets/img/breadcrumb.jpg"
        Title="Privacy Policy"
      />

      <section className="terms-section">
        <div className="terms-header container_pa_top">
          <h1>Privacy Policy</h1>
          <p>Last Updated: March 2026</p>
        </div>

        <div className="terms-content">

          {/* 1 */}
          <div className="terms-block">
            <h2>1. Introduction</h2>
            <p>
              Vaqtrix ("Company", "we", "our", or "us") respects your privacy and is committed to protecting your
              personal information. This Privacy Policy explains how we collect, use, store, and safeguard your
              information when you visit our website{" "}
              <Link href="https://vaqtrix.com">https://vaqtrix.com</Link> or interact with our services.
            </p>
            <p>
              By accessing our website or using our services, you agree to the practices described in this Privacy
              Policy.
            </p>
          </div>

          {/* 2 */}
          <div className="terms-block">
            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal and non-personal information when you interact with our website, services, or
              communication channels.
            </p>

            <h3>Personal Information</h3>
            <p>We may collect the following information:</p>
            <ul className="bullet-list">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Business details related to service inquiries</li>
              <li>Billing and payment information (if applicable)</li>
            </ul>
            <p>This information is collected when you:</p>
            <ul className="bullet-list">
              <li>Fill out contact forms</li>
              <li>Request consultations</li>
              <li>Subscribe to newsletters</li>
              <li>Communicate with us via email or messaging</li>
            </ul>

            <h3>Non-Personal Information</h3>
            <p>We may automatically collect technical data such as:</p>
            <ul className="bullet-list">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Referral sources</li>
              <li>Website usage behavior</li>
            </ul>
            <p>This data helps us improve our services and user experience.</p>
          </div>

          {/* 3 */}
          <div className="terms-block">
            <h2>3. How We Use Your Information</h2>
            <p>Vaqtrix may use the information we collect for the following purposes:</p>
            <ul className="bullet-list">
              <li>Providing and delivering our services</li>
              <li>Responding to inquiries and support requests</li>
              <li>Managing client relationships</li>
              <li>Improving website functionality and performance</li>
              <li>Conducting analytics and research</li>
              <li>Sending service updates or marketing communications (with consent)</li>
              <li>Protecting against fraud or unauthorized activity</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="terms-block">
            <h2>4. Data Sharing and Disclosure</h2>
            <p>Vaqtrix does not sell, rent, or trade personal information to third parties.</p>
            <p>We may share information with trusted third parties only when necessary, including:</p>
            <ul className="bullet-list">
              <li>Service providers assisting with website hosting, analytics, or marketing</li>
              <li>Payment processors handling secure transactions</li>
              <li>Legal authorities if required by law or regulatory compliance</li>
            </ul>
            <p>All third parties are required to maintain confidentiality and data protection standards.</p>
          </div>

          {/* 5 */}
          <div className="terms-block">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p>These measures may include:</p>
            <ul className="bullet-list">
              <li>Secure servers</li>
              <li>Data encryption</li>
              <li>Access control systems</li>
              <li>Regular security monitoring</li>
            </ul>
            <p>
              However, no method of data transmission over the internet can be guaranteed to be completely secure.
            </p>
          </div>

          {/* 6 */}
          <div className="terms-block">
            <h2>6. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes described in this policy,
              including:
            </p>
            <ul className="bullet-list">
              <li>Providing services</li>
              <li>Meeting legal obligations</li>
              <li>Resolving disputes</li>
              <li>Enforcing agreements</li>
            </ul>
            <p>
              Once the information is no longer required, it will be securely deleted or anonymized.
            </p>
          </div>

          {/* 7 */}
          <div className="terms-block">
            <h2>7. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have rights regarding your personal data, including:
            </p>
            <ul className="bullet-list">
              <li>The right to access your data</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your data</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>
            <p>To exercise these rights, you may contact us using the information below.</p>
          </div>

          {/* 8 */}
          <div className="terms-block">
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. Vaqtrix is not responsible for the
              privacy practices or content of external websites.
            </p>
            <p>Users are encouraged to review the privacy policies of those websites.</p>
          </div>

          {/* 9 */}
          <div className="terms-block">
            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 13. We do not knowingly collect personal
              information from children.
            </p>
            <p>
              If we become aware that such information has been collected, it will be promptly removed.
            </p>
          </div>

          {/* 10 */}
          <div className="terms-block">
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              Vaqtrix may update this Privacy Policy periodically to reflect changes in our services, legal
              requirements, or privacy practices.
            </p>
            <p>Any updates will be posted on this page with the updated revision date.</p>
          </div>

          {/* 11 */}
          <div className="terms-block">
            <h2>11. Contact Information</h2>
            <p>
              If you have questions about this Privacy Policy or how your information is handled, you may contact us at:
            </p>
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
        .terms-block h3,
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

        .terms-block h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-top: 20px;
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
}

export default PrivacyPolicy;
