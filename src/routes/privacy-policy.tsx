import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy | Billings Builds' },
      {
        name: 'description',
        content:
          'Privacy Policy for Billings Builds LLC — how we collect, use, and protect your personal information.',
      },
      { name: 'robots', content: 'noindex, follow' },
    ],
    links: [{ rel: 'canonical', href: 'https://billingsbuilds.com/privacy-policy' }],
  }),
  component: PrivacyPolicyPage,
})

const TOC_ITEMS = [
  { id: 'collect', label: '1. What Information Do We Collect?' },
  { id: 'process', label: '2. How Do We Process Your Information?' },
  { id: 'share', label: '3. When and With Whom Do We Share Your Personal Information?' },
  { id: 'retention', label: '4. How Long Do We Keep Your Information?' },
  { id: 'security', label: '5. How Do We Keep Your Information Safe?' },
  { id: 'minors', label: '6. Do We Collect Information From Minors?' },
  { id: 'rights', label: '7. What Are Your Privacy Rights?' },
  { id: 'dnt', label: '8. Controls for Do-Not-Track Features' },
  { id: 'us-rights', label: '9. Do United States Residents Have Specific Privacy Rights?' },
  { id: 'updates', label: '10. Do We Make Updates to This Notice?' },
  { id: 'contact', label: '11. How Can You Contact Us About This Notice?' },
  { id: 'delete', label: '12. How Can You Review, Update, or Delete the Data We Collect?' },
]

const DATA_CATEGORIES = [
  {
    label: 'A. Identifiers',
    examples: 'Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name',
    collected: true,
  },
  {
    label: 'B. Personal information as defined in the California Customer Records statute',
    examples: 'Name, contact information, education, employment, employment history, and financial information',
    collected: true,
  },
  {
    label: 'C. Protected classification characteristics under state or federal law',
    examples: 'Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data',
    collected: false,
  },
  {
    label: 'D. Commercial information',
    examples: 'Transaction information, purchase history, financial details, and payment information',
    collected: false,
  },
  {
    label: 'E. Biometric information',
    examples: 'Fingerprints and voiceprints',
    collected: false,
  },
  {
    label: 'F. Internet or other similar network activity',
    examples: 'Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements',
    collected: false,
  },
  {
    label: 'G. Geolocation data',
    examples: 'Device location',
    collected: false,
  },
  {
    label: 'H. Audio, electronic, sensory, or similar information',
    examples: 'Images and audio, video or call recordings created in connection with our business activities',
    collected: false,
  },
  {
    label: 'I. Professional or employment-related information',
    examples: 'Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us',
    collected: false,
  },
  {
    label: 'J. Education Information',
    examples: 'Student records and directory information',
    collected: false,
  },
  {
    label: 'K. Inferences drawn from collected personal information',
    examples: 'Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual\'s preferences and characteristics',
    collected: false,
  },
  {
    label: 'L. Sensitive personal information',
    examples: '',
    collected: false,
  },
]

function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-red-400 mb-3">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-zinc-500 text-sm">Last updated May 27, 2026</p>
          </div>

          <div className="space-y-8">
            {/* Intro */}
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/8">
              <p className="text-zinc-400 text-sm leading-relaxed">
                This Privacy Notice for Billings Builds LLC ("we," "us," or "our") describes how and
                why we might access, collect, store, use, and/or share ("process") your personal
                information when you use our services ("Services"), including when you:
              </p>
              <ul className="mt-4 space-y-2">
                <BulletItem>
                  Visit our website at{' '}
                  <a
                    href="https://billingsbuilds.com"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    billingsbuilds.com
                  </a>{' '}
                  or any website of ours that links to this Privacy Notice
                </BulletItem>
                <BulletItem>
                  Contact us about a project through our contact form or via email
                </BulletItem>
              </ul>
              <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
                <strong className="text-zinc-300">Questions or concerns?</strong> Reading this
                Privacy Notice will help you understand your privacy rights and choices. We are
                responsible for making decisions about how your personal information is processed.
                If you do not agree with our policies and practices, please do not use our Services.
                If you still have any questions or concerns, please contact us at{' '}
                <a
                  href="mailto:dbillings100@gmail.com"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  dbillings100@gmail.com
                </a>
                .
              </p>
            </div>

            {/* Summary */}
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/8">
              <h2 className="text-lg font-bold text-white mb-5">Summary of Key Points</h2>
              <p className="text-zinc-500 text-xs italic mb-5">
                This summary provides key points from our Privacy Notice. You can find more details
                by using our table of contents below.
              </p>
              <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                <SummaryPoint label="What personal information do we process?">
                  When you visit, use, or navigate our Services, we may process personal information
                  depending on how you interact with us and the Services and the choices you make.
                </SummaryPoint>
                <SummaryPoint label="Do we process any sensitive personal information?">
                  We do not process sensitive personal information.
                </SummaryPoint>
                <SummaryPoint label="Do we collect any information from third parties?">
                  We do not collect any information from third parties.
                </SummaryPoint>
                <SummaryPoint label="How do we process your information?">
                  We process your information solely to respond to your project inquiries and
                  communicate with you about potential or ongoing engagements.
                </SummaryPoint>
                <SummaryPoint label="In what situations and with which parties do we share personal information?">
                  We share your information with EmailJS to deliver contact form submissions to us,
                  and may share it in connection with a business transfer. We do not sell your data.
                  Learn more in Section 3.
                </SummaryPoint>
                <SummaryPoint label="How do we keep your information safe?">
                  We have adequate organizational and technical processes in place to protect your
                  personal information. However, no electronic transmission or storage technology
                  can be guaranteed 100% secure.
                </SummaryPoint>
                <SummaryPoint label="What are your rights?">
                  Depending on where you are located geographically, the applicable privacy law may
                  mean you have certain rights regarding your personal information.
                </SummaryPoint>
                <SummaryPoint label="How do you exercise your rights?">
                  The easiest way to exercise your rights is by contacting us directly. We will
                  consider and act upon any request in accordance with applicable data protection laws.
                </SummaryPoint>
              </div>
            </div>

            {/* TOC */}
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/8">
              <h2 className="text-lg font-bold text-white mb-5">Table of Contents</h2>
              <ol className="space-y-2">
                {TOC_ITEMS.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-sm text-red-400 hover:text-red-300 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Main content */}
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/8 space-y-12">
              {/* 1 */}
              <Section id="collect" title="1. What Information Do We Collect?">
                <Eyebrow>Personal information you disclose to us</Eyebrow>
                <p className="mt-2">
                  <em>In Short: We collect personal information that you provide to us.</em>
                </p>
                <p className="mt-3">
                  We collect personal information that you voluntarily provide to us when you
                  express an interest in obtaining information about us or our products and
                  Services, when you participate in activities on the Services, or otherwise when
                  you contact us.
                </p>
                <p className="mt-3">
                  <strong className="text-zinc-300">Personal Information Provided by You.</strong>{' '}
                  The personal information we collect may include the following:
                </p>
                <ul className="mt-3 space-y-2">
                  <BulletItem>Names</BulletItem>
                  <BulletItem>Phone numbers</BulletItem>
                  <BulletItem>Email addresses</BulletItem>
                  <BulletItem>Project type and general budget range (as selected in our contact form)</BulletItem>
                  <BulletItem>Project description and any details you voluntarily include in your message</BulletItem>
                </ul>
                <p className="mt-3">
                  <strong className="text-zinc-300">Sensitive Information.</strong> We do not
                  process sensitive information.
                </p>
                <p className="mt-3">
                  Please ensure the information you provide is accurate so we can respond to your
                  inquiry effectively.
                </p>
              </Section>

              <Divider />

              {/* 2 */}
              <Section id="process" title="2. How Do We Process Your Information?">
                <p>
                  <em>
                    In Short: We process your information solely to respond to your project
                    inquiries and communicate with you about potential or ongoing engagements.
                  </em>
                </p>
                <p className="mt-3">
                  We process your personal information for the following reason:
                </p>
                <ul className="mt-3 space-y-2">
                  <BulletItem>
                    <strong className="text-zinc-300">To respond to project inquiries.</strong>{' '}
                    When you submit our contact form, we use the information you provide to
                    evaluate your project, respond to your message, and communicate with you
                    about scope, pricing, and next steps.
                  </BulletItem>
                </ul>
                <p className="mt-3">
                  We do not use your information for advertising, analytics, fraud scoring, or
                  any purpose beyond direct communication related to your inquiry.
                </p>
              </Section>

              <Divider />

              {/* 3 */}
              <Section id="share" title="3. When and With Whom Do We Share Your Personal Information?">
                <p>
                  <em>
                    In Short: We share your information with EmailJS to deliver your form
                    submission to us, and may share it in the event of a business transfer.
                    We do not sell your data.
                  </em>
                </p>
                <p className="mt-3">
                  We may share your personal information in the following situations:
                </p>
                <ul className="mt-3 space-y-2">
                  <BulletItem>
                    <strong className="text-zinc-300">Service Providers — EmailJS.</strong> When
                    you submit our contact form, your information is transmitted to our inbox
                    via{' '}
                    <a
                      href="https://www.emailjs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      EmailJS
                    </a>
                    , a third-party email delivery service. EmailJS acts as a data processor on
                    our behalf and is subject to its own{' '}
                    <a
                      href="https://www.emailjs.com/legal/privacy-policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      Privacy Policy
                    </a>
                    . We do not authorize EmailJS to use your data for any purpose other than
                    delivering your message to us.
                  </BulletItem>
                  <BulletItem>
                    <strong className="text-zinc-300">Business Transfers.</strong> We may share or
                    transfer your information in connection with, or during negotiations of, any
                    merger, sale of company assets, financing, or acquisition of all or a portion
                    of our business to another company.
                  </BulletItem>
                </ul>
                <p className="mt-3">
                  We do not sell, rent, or trade your personal information to third parties for
                  marketing or any other commercial purpose.
                </p>
              </Section>

              <Divider />

              {/* 4 */}
              <Section id="retention" title="4. How Long Do We Keep Your Information?">
                <p>
                  <em>
                    In Short: We retain your information for as long as needed to respond to your
                    inquiry and manage any resulting project relationship, typically no longer than
                    two years from our last contact.
                  </em>
                </p>
                <p className="mt-3">
                  We retain contact form submissions and related correspondence for as long as
                  necessary to respond to your inquiry and conduct any resulting project engagement.
                  If no project engagement follows your inquiry, we retain your information for no
                  longer than <strong className="text-zinc-300">two (2) years</strong> from the
                  date of last contact, unless a longer retention period is required by law (such
                  as tax, accounting, or other legal requirements).
                </p>
                <p className="mt-3">
                  When we have no ongoing legitimate business need to retain your personal
                  information, we will delete or anonymize it. If immediate deletion is not
                  possible (for example, because information exists in email backup archives), we
                  will isolate it from further use until deletion is possible.
                </p>
              </Section>

              <Divider />

              {/* 5 */}
              <Section id="security" title="5. How Do We Keep Your Information Safe?">
                <p>
                  <em>
                    In Short: We aim to protect your personal information through a system of
                    organizational and technical security measures.
                  </em>
                </p>
                <p className="mt-3">
                  We have implemented appropriate and reasonable technical and organizational
                  security measures designed to protect the security of any personal information we
                  process. However, despite our safeguards and efforts to secure your information,
                  no electronic transmission over the Internet or information storage technology
                  can be guaranteed to be 100% secure, so we cannot promise or guarantee that
                  hackers, cybercriminals, or other unauthorized third parties will not be able to
                  defeat our security and improperly collect, access, steal, or modify your
                  information. Although we will do our best to protect your personal information,
                  transmission of personal information to and from our Services is at your own
                  risk. You should only access the Services within a secure environment.
                </p>
              </Section>

              <Divider />

              {/* 6 */}
              <Section id="minors" title="6. Do We Collect Information From Minors?">
                <p>
                  <em>
                    In Short: We do not knowingly collect data from or market to children under 18
                    years of age.
                  </em>
                </p>
                <p className="mt-3">
                  We do not knowingly collect, solicit data from, or market to children under 18
                  years of age, nor do we knowingly sell such personal information. By using the
                  Services, you represent that you are at least 18 years of age. If we learn that
                  personal information from users less than 18 years of
                  age has been collected, we will take reasonable measures to promptly delete such
                  data from our records. If you become aware of any data we may have collected from
                  children under age 18, please contact us at{' '}
                  <a
                    href="mailto:dbillings100@gmail.com"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    dbillings100@gmail.com
                  </a>
                  .
                </p>
              </Section>

              <Divider />

              {/* 7 */}
              <Section id="rights" title="7. What Are Your Privacy Rights?">
                <p>
                  <em>
                    In Short: You may review, change, or request deletion of your data at any time,
                    depending on your country, province, or state of residence.
                  </em>
                </p>
                <p className="mt-3">
                  <strong className="text-zinc-300">Legal basis for processing:</strong> We process
                  your personal information on the basis of <em>legitimate interest</em> — specifically,
                  our legitimate interest in responding to your project inquiry. You may object to
                  this processing at any time by contacting us, in which case we will cease
                  processing your information for that purpose.
                </p>
                <p className="mt-3">
                  <strong className="text-zinc-300">Opting out of future contact:</strong> If you
                  no longer wish to be contacted, email us and we will remove you from any active
                  correspondence. Note that this does not affect the lawfulness of any processing
                  that occurred before your request.
                </p>
                <p className="mt-3">
                  If you have questions or comments about your privacy rights, you may email us at{' '}
                  <a
                    href="mailto:dbillings100@gmail.com"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    dbillings100@gmail.com
                  </a>
                  .
                </p>
              </Section>

              <Divider />

              {/* 8 */}
              <Section id="dnt" title="8. Controls for Do-Not-Track Features">
                <p>
                  Most web browsers and some mobile operating systems and mobile applications
                  include a Do-Not-Track ("DNT") feature or setting you can activate to signal your
                  privacy preference not to have data about your online browsing activities
                  monitored and collected. At this stage, no uniform technology standard for
                  recognizing and implementing DNT signals has been finalized. As such, we do not
                  currently respond to DNT browser signals or any other mechanism that
                  automatically communicates your choice not to be tracked online. If a standard
                  for online tracking is adopted that we must follow in the future, we will inform
                  you about that practice in a revised version of this Privacy Notice.
                </p>
                <p className="mt-3">
                  California law requires us to let you know how we respond to web browser DNT
                  signals. Because there currently is not an industry or legal standard for
                  recognizing or honoring DNT signals, we do not respond to them at this time.
                </p>
              </Section>

              <Divider />

              {/* 9 */}
              <Section id="us-rights" title="9. Do United States Residents Have Specific Privacy Rights?">
                <p>
                  <em>
                    In Short: If you are a resident of California, Colorado, Connecticut, Delaware,
                    Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New
                    Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or
                    Virginia, you may have specific rights regarding your personal information.
                  </em>
                </p>

                <h3 className="text-zinc-200 font-semibold mt-6 mb-3">
                  Categories of Personal Information We Collect
                </h3>
                <p className="mb-2">
                  The table below shows the categories of personal information we have collected in
                  the past twelve (12) months. The examples column lists illustrative items from
                  each category — not all examples apply to us. For the specific data we collect,
                  see Section 1.
                </p>

                {/* Data categories table */}
                <div className="overflow-x-auto rounded-xl border border-white/8">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/8 bg-white/4">
                        <th className="text-left p-3 text-zinc-300 font-semibold w-1/2">Category</th>
                        <th className="text-left p-3 text-zinc-300 font-semibold w-2/5">Examples</th>
                        <th className="text-left p-3 text-zinc-300 font-semibold">Collected</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DATA_CATEGORIES.map(({ label, examples, collected }, i) => (
                        <tr
                          key={label}
                          className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/2'}`}
                        >
                          <td className="p-3 text-zinc-400 align-top">{label}</td>
                          <td className="p-3 text-zinc-500 align-top">{examples}</td>
                          <td className="p-3 align-top">
                            <span className={collected ? 'text-yellow-500' : 'text-zinc-600'}>
                              {collected ? 'YES' : 'NO'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-zinc-200 font-semibold mt-8 mb-3">Your Rights</h3>
                <p>You have rights under certain US state data protection laws, including:</p>
                <ul className="mt-3 space-y-2">
                  <BulletItem>Right to know whether or not we are processing your personal data</BulletItem>
                  <BulletItem>Right to access your personal data</BulletItem>
                  <BulletItem>Right to correct inaccuracies in your personal data</BulletItem>
                  <BulletItem>Right to request the deletion of your personal data</BulletItem>
                  <BulletItem>Right to obtain a copy of the personal data you previously shared with us</BulletItem>
                  <BulletItem>Right to non-discrimination for exercising your rights</BulletItem>
                  <BulletItem>
                    Right to opt out of the processing of your personal data if it is used for
                    targeted advertising, the sale of personal data, or profiling
                  </BulletItem>
                </ul>
                <p className="mt-3 text-zinc-500 text-xs italic">
                  Note: We do not engage in targeted advertising, the sale of personal data, or
                  profiling. The opt-out right above is listed for completeness as required by
                  applicable state law.
                </p>

                <h3 className="text-zinc-200 font-semibold mt-8 mb-3">How to Exercise Your Rights</h3>
                <p>
                  To exercise these rights, you can contact us by emailing us at{' '}
                  <a
                    href="mailto:dbillings100@gmail.com"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    dbillings100@gmail.com
                  </a>{' '}
                  or by visiting{' '}
                  <Link to="/contact" className="text-red-400 hover:text-red-300 transition-colors">
                    billingsbuilds.com/contact
                  </Link>
                  .
                </p>

                <h3 className="text-zinc-200 font-semibold mt-8 mb-3">Appeals</h3>
                <p>
                  Under certain US state data protection laws, if we decline to take action
                  regarding your request, you may appeal our decision by emailing us at{' '}
                  <a
                    href="mailto:dbillings100@gmail.com"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    dbillings100@gmail.com
                  </a>
                  . We will inform you in writing of any action taken or not taken in response to
                  the appeal, including a written explanation of the reasons for the decisions. If
                  your appeal is denied, you may submit a complaint to your state attorney general.
                </p>

                <h3 className="text-zinc-200 font-semibold mt-8 mb-3">
                  California "Shine The Light" Law
                </h3>
                <p>
                  California Civil Code Section 1798.83, also known as the "Shine The Light" law,
                  permits our users who are California residents to request and obtain from us, once
                  a year and free of charge, information about categories of personal information
                  (if any) we disclosed to third parties for direct marketing purposes and the
                  names and addresses of all third parties with which we shared personal information
                  in the immediately preceding calendar year. If you are a California resident and
                  would like to make such a request, please submit your request in writing to us
                  using the contact details provided in Section 11 below.
                </p>
              </Section>

              <Divider />

              {/* 10 */}
              <Section id="updates" title="10. Do We Make Updates to This Notice?">
                <p>
                  <em>
                    In Short: Yes, we will update this notice as necessary to stay compliant with
                    relevant laws.
                  </em>
                </p>
                <p className="mt-3">
                  We may update this Privacy Notice from time to time. The updated version will be
                  indicated by an updated "Last updated" date at the top of this Privacy Notice. If
                  we make material changes to this Privacy Notice, we may notify you either by
                  prominently posting a notice of such changes or by directly sending you a
                  notification. We encourage you to review this Privacy Notice frequently to be
                  informed of how we are protecting your information.
                </p>
              </Section>

              <Divider />

              {/* 11 */}
              <Section id="contact" title="11. How Can You Contact Us About This Notice?">
                <p>
                  If you have questions or comments about this notice, you may email us at{' '}
                  <a
                    href="mailto:dbillings100@gmail.com"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    dbillings100@gmail.com
                  </a>{' '}
                  or contact us by post at:
                </p>
                <div className="mt-4 p-5 rounded-xl bg-white/4 border border-white/8 text-zinc-300">
                  <p className="font-medium text-white">Billings Builds LLC</p>
                  <p>21950 215th St</p>
                  <p>Gallatin, MO 64640</p>
                  <p>United States</p>
                </div>
              </Section>

              <Divider />

              {/* 12 */}
              <Section id="delete" title="12. How Can You Review, Update, or Delete the Data We Collect From You?">
                <p>
                  Based on the applicable laws of your country or state of residence in the US, you
                  may have the right to request access to the personal information we collect from
                  you, details about how we have processed it, correct inaccuracies, or delete your
                  personal information. You may also have the right to withdraw your consent to our
                  processing of your personal information. These rights may be limited in some
                  circumstances by applicable law.
                </p>
                <p className="mt-3">
                  To request to review, update, or delete your personal information, please email
                  us at{' '}
                  <a
                    href="mailto:dbillings100@gmail.com"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    dbillings100@gmail.com
                  </a>{' '}
                  or visit our{' '}
                  <Link to="/contact" className="text-red-400 hover:text-red-300 transition-colors">
                    contact page
                  </Link>
                  .
                </p>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id}>
      <h2 className="text-base font-bold text-white mb-3 uppercase tracking-wide">{title}</h2>
      <div className="text-zinc-400 text-sm leading-relaxed">{children}</div>
    </section>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-zinc-300 font-semibold">{children}</p>
}

function SummaryPoint({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="font-semibold text-zinc-300">{label} </span>
      {children}
    </div>
  )
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-zinc-400 text-sm">
      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}

function Divider() {
  return <hr className="border-white/8" />
}
