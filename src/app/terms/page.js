import styles from "./page.module.css";
import Link from "next/link";

export default function Terms() {

  return (
    <div className={styles.privacy_container}>
  <h1>Artech Terms and Conditions</h1>

  <h2>Introduction</h2>
  <p>
    Welcome to Artech Agency (“we”, “us”, “our”). By using our services,
    website, or communication channels, you agree to be bound by these Terms
    and Conditions. If you do not agree, you must not use our services.
  </p>

  <h2>Services</h2>
  <p>
    Artech provides website creation, logo design, branding, marketing
    services, content creation, and digital strategy. All services,
    deliverables, scope, and deadlines must be agreed upon in writing before
    the project begins.
  </p>

  <h2>Payment Terms</h2>
  <p>
    A deposit is required before the commencement of any project. The
    remaining 50% is due upon project completion and before the final
    delivery of work. Payment can be made via bank transfer or other
    approved methods specified in our invoices. Work will not be released
    until full payment is received.
  </p>

  <h2>Refund Policy</h2>
  <p>
    Refunds will be handled as follows: If the client cancels the project
    before work begins, the upfront payment may be refunded minus any
    administrative fees. If the project has already begun, no refunds will
    be issued for completed stages. Marketing and advertising services are
    strictly non-refundable due to the nature of digital advertising.
  </p>

  <h2>Revisions Policy</h2>
  <p>
    Clients are entitled to up to 2 rounds of revisions after the delivery
    of the initial drafts. Additional revisions will incur an extra charge,
    which will be communicated beforehand. Revisions do not include major
    redesigns or changes not included in the original scope.
  </p>

  <h2>Ownership of Work</h2>
  <p>
    Upon full payment, clients will have ownership rights to the final
    deliverables. Artech retains the right to showcase completed projects in
    its portfolio unless otherwise agreed in writing. Working files, drafts,
    and source files remain the property of Artech unless purchased
    separately.
  </p>

  <h2>Client Responsibilities</h2>
  <p>
    Clients must provide all required information, materials, logins, and
    feedback promptly. Delays in communication or provision of materials may
    extend project timelines. Clients must ensure provided materials do not
    infringe third-party rights.
  </p>

  <h2>Marketing & Advertising Disclaimer</h2>
  <p>
    The client understands that no agency can guarantee a specific number of
    sales, revenue, or profit. Advertising performance depends on factors
    such as competition, industry conditions, product quality, landing page
    quality, and seasonality. We are not responsible for platform bans,
    rejected ads, or rule changes on advertising platforms.
  </p>

  <h2>Liability</h2>
  <p>
    Artech will not be held responsible for any indirect, incidental, or
    consequential damages arising from the use of our services. This
    includes loss of income, business opportunities, technical failures,
    hosting issues, or delays caused by third-party services. Our maximum
    liability is limited to the total fee paid for the specific project.
  </p>

  <h2>Data Privacy</h2>
  <p>
    We process client data in accordance with our Privacy Policy. By using
    our services, you consent to the collection and use of your data as
    outlined in our{" "}
    <Link href="/privacy" className="privacy_policy_link">
      Privacy Policy
    </Link>
    .
  </p>

  <h2>Governing Law</h2>
  <p>
    These Terms and Conditions are governed by the laws of the United
    Kingdom. Any disputes arising from these terms will be resolved in UK
    courts.
  </p>

  {/* --------------------- GUARANTEE SECTION --------------------- */}

  <h2>Performance Investment Guarantee</h2>
  <p>
    We offer a Performance Investment Guarantee to demonstrate our
    commitment to delivering measurable marketing results. When a client
    pays a fixed project fee (e.g., £2,000), a portion is allocated directly
    toward advertising spend (e.g., £1,000) and the remainder covers service
    and management. If the performance of the initial advertising phase does
    not meet the agreed expectations, we will reinvest the remaining
    advertising budget (e.g., the remaining £1,000) into ongoing marketing
    efforts at no additional cost to the client.
  </p>

  <h2>Definition of Performance Expectations</h2>
  <p>
    Performance expectations are defined prior to the start of the campaign
    and are based on mutually agreed KPIs, including:
    <br />
    <br />
    • Lead volume  
    <br />
    • Cost per lead  
    <br />
    • Conversion rate improvements  
    <br />
    • Engagement or traffic increases  
    <br />
    • Other measurable indicators relevant to the client’s industry  
    <br />
    <br />
    Performance is evaluated using tracking tools and data available in the
    advertising accounts.
  </p>

  <h2>Conditions to Qualify for the Guarantee</h2>
  <p>
    The client is eligible for the Performance Investment Guarantee only if
    all the following conditions are met:
    <br />
    <br />
    • Full access to required advertising accounts and analytics  
    <br />
    • Following our recommendations regarding creatives and targeting  
    <br />
    • No external modifications to campaigns  
    <br />
    • Maintaining the agreed advertising budget  
    <br />
    • Providing required materials on time  
    <br />
    • Allowing the campaign to run for the full agreed duration  
    <br />
    <br />
    Failure to meet any condition voids the guarantee.
  </p>

  <h2>What the Guarantee Covers</h2>
  <p>
    If initial results do not meet the agreed performance expectations:
    <br />
    <br />
    • We reinvest the remaining budget directly into further ads  
    <br />
    • We continue managing the campaign for free until the remaining funds
    are fully spent  
    <br />
    • No additional fees will be charged  
    <br />
    <br />
    This ensures 100% of the client’s budget is used toward achieving
    results, even if it means we make no profit.
  </p>

  <h2>What the Guarantee Does NOT Cover</h2>
  <p>
    The guarantee does not include:
    <br />
    <br />
    • Refunds of any kind  
    <br />
    • Compensation for losses or missed opportunities  
    <br />
    • Guaranteed sales or revenue outcomes  
    <br />
    • Reinvestment beyond the remaining portion of the initial budget  
    <br />
    • Cash payout of unused funds  
    <br />
    • Issues caused by product quality, market conditions, or client delays  
    <br />
    <br />
    This is a reinvestment guarantee, not a money-back guarantee.
  </p>

  <h2>Limitation of Liability (Guarantee)</h2>
  <p>
    Our total liability under this guarantee is strictly limited to
    reinvesting the remaining portion of the client’s project budget into
    additional advertising. We are not responsible for loss of income,
    platform bans, technical issues on client websites, or factors outside
    our control.
  </p>

  <h2>Final Interpretation</h2>
  <p>
    Artech reserves the right to determine whether performance expectations
    were met, validate campaign data, confirm client compliance, and decide
    the timing and allocation of additional advertising investment.
  </p>
</div>
  );
}