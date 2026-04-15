"use client"
import BreadCumb from '@/Components/Common/BreadCumb';
import Link from 'next/link';

const RefundPolicy = () => {
  return (
    <>
      <BreadCumb
        bgimg="/assets/img/breadcrumb.jpg"
        Title="Refund Policy"
      />

      <section className="terms-section">
        <div className="terms-header container_pa_top">
          <h1>Refund Policy</h1>
          <p>Last Updated: March 2026</p>
        </div>

        <div className="terms-content">

          {/* 1 */}
          <div className="terms-block">
            <h2>1. Introduction</h2>
            <p>
              At Vaqtrix, we strive to provide high-quality AI, software, and digital services to our clients. This
              Refund Policy outlines the conditions under which refunds may be granted for services purchased through{" "}
              <Link href="https://vaqtrix.com">https://vaqtrix.com</Link>.
            </p>
            <p>
              By purchasing or using our services, you agree to the terms described in this policy.
            </p>
          </div>

          {/* 2 */}
          <div className="terms-block">
            <h2>2. Service-Based Refund Policy</h2>
            <p>
              Due to the nature of digital services, including AI development, website development, mobile app
              development, digital marketing, branding, e-commerce solutions, and related services, refunds are
              generally not guaranteed once work has commenced.
            </p>
            <p>
              However, refund requests may be reviewed on a case-by-case basis under specific circumstances.
            </p>
          </div>

          {/* 3 */}
          <div className="terms-block">
            <h2>3. Eligibility for Refunds</h2>
            <p>Refunds may be considered under the following situations:</p>
            <ul className="bullet-list">
              <li>The service has not yet started after payment confirmation.</li>
              <li>Vaqtrix is unable to deliver the agreed service due to internal limitations.</li>
              <li>A duplicate payment or billing error has occurred.</li>
              <li>The client cancels the service before project work begins.</li>
            </ul>
            <p>Refund requests must be submitted within <strong>7 days</strong> of payment.</p>
          </div>

          {/* 4 */}
          <div className="terms-block">
            <h2>4. Non-Refundable Situations</h2>
            <p>Refunds will not be issued in the following situations:</p>
            <ul className="bullet-list">
              <li>Work on the project has already started.</li>
              <li>Project milestones have been completed or delivered.</li>
              <li>Delays caused by the client (lack of information, approvals, or resources).</li>
              <li>Changes in client requirements after work has started.</li>
              <li>
                Services that involve third-party costs such as hosting, advertising budgets, software licenses, or
                domain registrations.
              </li>
            </ul>
            <p>Digital deliverables and completed services are considered non-refundable once provided.</p>
          </div>

          {/* 5 */}
          <div className="terms-block">
            <h2>5. Partial Refunds</h2>
            <p>In certain circumstances, partial refunds may be issued if:</p>
            <ul className="bullet-list">
              <li>A project is cancelled after partial completion.</li>
              <li>Only a portion of the service has been delivered.</li>
            </ul>
            <p>In such cases, the refund amount will be determined based on:</p>
            <ul className="bullet-list">
              <li>Work completed</li>
              <li>Resources allocated</li>
              <li>Project stage</li>
            </ul>
          </div>

          {/* 6 */}
          <div className="terms-block">
            <h2>6. Subscription or Monthly Services</h2>
            <p>
              For services billed on a monthly basis, including digital marketing, PPC management, SEO services, or
              automation management:
            </p>
            <ul className="bullet-list">
              <li>Payments already processed for the current billing period are non-refundable.</li>
              <li>
                Clients may cancel future billing cycles with advance notice before the next billing date.
              </li>
            </ul>
          </div>

          {/* 7 */}
          <div className="terms-block">
            <h2>7. Chargebacks and Payment Disputes</h2>
            <p>
              Clients are encouraged to contact Vaqtrix support before initiating chargebacks or payment disputes.
            </p>
            <p>Unauthorized chargebacks may result in:</p>
            <ul className="bullet-list">
              <li>Immediate suspension of services</li>
              <li>Termination of ongoing projects</li>
              <li>Legal or recovery actions where necessary</li>
            </ul>
          </div>

          {/* 8 */}
          <div className="terms-block">
            <h2>8. Refund Processing</h2>
            <p>If a refund is approved:</p>
            <ul className="bullet-list">
              <li>Refunds will be processed using the original payment method where possible.</li>
              <li>
                Processing time may take <strong>5–10 business days</strong>, depending on the payment provider.
              </li>
            </ul>
          </div>

          {/* 9 */}
          <div className="terms-block">
            <h2>9. Changes to This Refund Policy</h2>
            <p>
              Vaqtrix reserves the right to update or modify this Refund Policy at any time. Any changes will be
              posted on this page with an updated revision date.
            </p>
          </div>

          {/* 10 */}
          <div className="terms-block">
            <h2>10. Contact Us</h2>
            <p>
              If you have questions regarding this Refund Policy or wish to request a refund, please contact us:
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

        strong {
          color: #1C4401;
        }
      `}</style>
    </>
  );
}

export default RefundPolicy;
