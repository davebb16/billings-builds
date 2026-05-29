import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/terms-of-service')({
  head: () => ({
    meta: [
      { title: 'Terms of Service | Billings Builds' },
      {
        name: 'description',
        content: 'Terms of Service for Billings Builds LLC — the terms that govern freelance project engagements.',
      },
      { name: 'robots', content: 'noindex, follow' },
    ],
    links: [{ rel: 'canonical', href: 'https://billingsbuilds.com/terms-of-service' }],
  }),
  component: TermsOfServicePage,
})

function TermsOfServicePage() {
  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-red-400 mb-3">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-zinc-500 text-sm">
              Effective May 27, 2026 &nbsp;·&nbsp; Last updated May 27, 2026
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/8 space-y-10">

            {/* 1 */}
            <Section title="1. Agreement">
              <p>
                These Terms of Service ("Terms") govern all freelance services provided by Billings
                Builds LLC ("we," "us," or "Contractor") to clients ("you" or "Client"). By
                engaging our services — whether by accepting a project proposal, signing a contract,
                or making a payment — you agree to these Terms.
              </p>
              <p className="mt-3">
                These Terms apply unless superseded by a signed project agreement, in which case
                that agreement governs.
              </p>
            </Section>

            {/* 2 */}
            <Section title="2. Independent Contractor">
              <p>
                Billings Builds LLC is an independent contractor, not an employee, agent, joint
                venturer, or partner of the Client. Nothing in these Terms creates an employment
                relationship, a joint venture, or a partnership between the parties.
              </p>
              <p className="mt-3">
                Billings Builds LLC retains sole discretion over the means, methods, and tools
                used to complete the work, subject to the agreed deliverables and timeline. Billings
                Builds LLC is solely responsible for all federal, state, and local taxes, insurance,
                and other obligations arising from compensation received under these Terms.
              </p>
            </Section>

            {/* 3 */}
            <Section title="3. Services">
              <p>
                Billings Builds LLC provides freelance software development services including web
                applications, mobile apps, APIs, and technical consulting. The specific scope,
                deliverables, and timeline for each engagement are defined in a written project
                proposal or statement of work ("Proposal") provided prior to project start.
              </p>
              <p className="mt-3">
                Work performed beyond the agreed scope will be subject to additional fees and
                requires written approval before proceeding.
              </p>
            </Section>

            {/* 4 */}
            <Section title="4. Payment Terms">
              <p>Unless otherwise agreed in writing:</p>
              <ul className="mt-4 space-y-2 text-zinc-400">
                <Li>A <strong className="text-white">50% deposit</strong> is due before work begins</Li>
                <Li>The remaining <strong className="text-white">50% is due upon project completion</strong>, prior to final delivery</Li>
                <Li>Invoices are payable within <strong className="text-white">14 days</strong> of receipt</Li>
                <Li>Late payments will accrue interest at 1.5% per month (18% per annum)</Li>
                <Li>All fees are quoted in USD unless otherwise stated</Li>
              </ul>
            </Section>

            {/* 5 */}
            <Section title="5. Revisions & Scope Changes">
              <p>
                The number of revision rounds included is specified in each Proposal. Requests that
                materially change the agreed scope — including new features, design overhauls, or
                significant technical pivots — will be scoped separately and billed accordingly.
              </p>
              <p className="mt-3">
                Minor bug fixes within the agreed deliverables, caused by defects in our original
                work and not resulting from client modifications or third-party changes, are
                included at no charge for 30 days following final delivery.
              </p>
              <p className="mt-3">
                For purposes of these Terms, <strong className="text-zinc-300">"final delivery"</strong>{' '}
                means the date on which the completed deliverables are transmitted to the Client
                (via file transfer, repository access, or equivalent method), regardless of whether
                the Client has reviewed or formally accepted them.
              </p>
            </Section>

            {/* 6 */}
            <Section title="6. Intellectual Property">
              <p>
                Upon receipt of full payment, all custom code, designs, and deliverables produced
                specifically for your project are assigned to you. You own what you paid for.
              </p>
              <p className="mt-3">
                We retain the right to use open-source libraries, frameworks, and tooling that
                remain subject to their respective licenses. We also retain the right to display
                the completed project in our portfolio unless you request otherwise in writing.
              </p>
              <p className="mt-3">
                Work is not transferred until payment is received in full. Until then, Billings
                Builds LLC retains all rights to the work product.
              </p>
              <p className="mt-3">
                For clarity, the assignment of copyright-protectable deliverables shall be
                confirmed in each signed Proposal or project agreement, or in written confirmation
                exchanged via email by both parties, either of which constitutes the written
                instrument required under 17 U.S.C. § 204(a).
              </p>
            </Section>

            {/* 7 */}
            <Section title="7. Confidentiality">
              <p>
                We treat all client project details, business information, and proprietary data as
                confidential. We will not disclose your information to third parties without your
                consent, except as required by law or as necessary to deliver services (e.g.,
                passing credentials to a hosting provider you designate).
              </p>
              <p className="mt-3">
                If a formal NDA is required, please request one before sharing confidential
                materials.
              </p>
            </Section>

            {/* 8 */}
            <Section title="8. Client Responsibilities">
              <p>You agree to:</p>
              <ul className="mt-4 space-y-2 text-zinc-400">
                <Li>Provide timely feedback and approvals to keep the project on schedule</Li>
                <Li>Supply content, assets, and access credentials when requested</Li>
                <Li>Ensure you have the legal rights to any materials you provide to us</Li>
                <Li>Designate a single point of contact for project decisions</Li>
              </ul>
              <p className="mt-4">
                Delays caused by late feedback or missing materials may affect timelines and are
                not the responsibility of Billings Builds LLC.
              </p>
            </Section>

            {/* 9 */}
            <Section title="9. Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless Billings Builds LLC and its
                owner from and against any claims, damages, losses, liabilities, costs, and
                expenses (including reasonable attorneys' fees) arising out of or related to:
              </p>
              <ul className="mt-4 space-y-2 text-zinc-400">
                <Li>Materials, content, or data you provide to us that infringe any third-party intellectual property, privacy, or other rights</Li>
                <Li>Your breach of these Terms or any applicable law</Li>
                <Li>Your use of the deliverables in a manner not authorized or contemplated by these Terms</Li>
              </ul>
            </Section>

            {/* 10 */}
            <Section title="10. Termination">
              <p>
                Either party may terminate a project engagement with written notice delivered via
                email to the addresses on record. Email to the addresses provided in a Proposal or
                prior correspondence constitutes valid written notice under these Terms. In the
                event of termination:
              </p>
              <ul className="mt-4 space-y-2 text-zinc-400">
                <Li>
                  You owe payment for all work completed or in-progress as of the termination date,
                  calculated on a pro-rated basis against the agreed project fee, or at an hourly
                  rate if not otherwise specified in the Proposal
                </Li>
                <Li>The deposit is non-refundable</Li>
                <Li>Deliverables completed and paid for are transferred to you; work-in-progress remains with Billings Builds LLC until the applicable fees are paid</Li>
              </ul>
            </Section>

            {/* 11 */}
            <Section title="11. Warranties & Disclaimer">
              <p>
                We take pride in delivering quality work and will fix defects within the agreed
                scope during the 30-day post-delivery period described in Section 5.
              </p>
              <p className="mt-3 font-semibold text-zinc-300">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. BEYOND
                THE 30-DAY DEFECT PERIOD, ALL DELIVERABLES ARE PROVIDED "AS IS."
              </p>
              <p className="mt-3">
                We do not warrant that deliverables will be error-free after client modifications,
                third-party updates, or changes to the operating environment. We make no guarantees
                regarding specific business outcomes, revenue, or user growth resulting from our
                work.
              </p>
            </Section>

            {/* 12 */}
            <Section title="12. Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BILLINGS BUILDS LLC'S TOTAL
                LIABILITY TO YOU FOR ANY CLAIM ARISING FROM OR RELATED TO THESE TERMS OR OUR
                SERVICES IS LIMITED TO THE GREATER OF: (A) THE TOTAL FEES PAID BY YOU FOR THE
                SPECIFIC PROJECT GIVING RISE TO THE CLAIM, OR (B) THE TOTAL FEES PAID BY YOU IN
                THE THREE MONTHS PRECEDING THE CLAIM.
              </p>
              <p className="mt-3">
                WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE
                DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR LOSS OF BUSINESS, EVEN IF WE HAVE
                BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </Section>

            {/* 13 */}
            <Section title="13. Force Majeure">
              <p>
                Neither party shall be liable for delays or failures in performance resulting from
                causes beyond that party's reasonable control, including but not limited to acts of
                God, illness, natural disasters, internet or infrastructure outages, government
                actions, or prolonged or material failure of third-party services that prevents
                performance. The affected party shall promptly notify the other party and resume
                performance as soon as reasonably possible.
              </p>
              <p className="mt-3">
                If a force majeure event causes a delay of more than 30 consecutive days, either
                party may terminate the engagement in accordance with Section 10, with payment owed
                for work completed to date.
              </p>
            </Section>

            {/* 14 */}
            <Section title="14. Governing Law & Dispute Resolution">
              <p>
                These Terms are governed by and construed in accordance with the laws of the State
                of Missouri, without regard to its conflict of law principles.
              </p>
              <p className="mt-3">
                Any dispute, claim, or controversy arising out of or relating to these Terms or
                the breach thereof shall first be attempted to be resolved through good-faith
                negotiation between the parties for a period of no less than{' '}
                <strong className="text-zinc-300">30 days</strong> following written notice of the
                dispute. Written notice for purposes of this section shall be delivered via email
                to the addresses on record. If negotiation fails within that period, the parties
                agree to submit to the exclusive jurisdiction of the state and federal courts
                located in Daviess County, Missouri.
              </p>
            </Section>

            {/* 15 */}
            <Section title="15. Severability">
              <p>
                If any provision of these Terms is found to be invalid, illegal, or unenforceable
                by a court of competent jurisdiction, that provision shall be modified to the
                minimum extent necessary to make it enforceable, or severed if modification is not
                possible. The remaining provisions of these Terms shall continue in full force and
                effect.
              </p>
            </Section>

            {/* 16 */}
            <Section title="16. Assignment">
              <p>
                Neither party may assign their rights or obligations under these Terms without the
                prior written consent of the other party. Notwithstanding the foregoing, Billings
                Builds LLC may assign these Terms without consent in connection with a merger,
                acquisition, or sale of all or substantially all of its assets, provided that the
                assignee assumes all obligations under these Terms.
              </p>
              <p className="mt-3">
                Any attempted assignment in violation of this section is void.
              </p>
            </Section>

            {/* 17 */}
            <Section title="17. Entire Agreement">
              <p>
                These Terms, together with any signed Proposal or project agreement, constitute the
                entire agreement between you and Billings Builds LLC with respect to the subject
                matter hereof and supersede all prior or contemporaneous understandings,
                negotiations, representations, and agreements, whether written or oral.
              </p>
              <p className="mt-3">
                In the event of a conflict between these Terms and a signed Proposal or project
                agreement, the signed Proposal or project agreement governs.
              </p>
            </Section>

            {/* 18 */}
            <Section title="18. Changes to These Terms">
              <p>
                We may update these Terms from time to time. Changes are effective when posted on
                this page with an updated date. Changes will not apply retroactively to projects
                for which a Proposal has already been accepted — those projects are governed by the
                Terms in effect at the time the Proposal was accepted. We will make reasonable
                efforts to notify active clients of any material changes.
              </p>
            </Section>

            {/* 19 */}
            <Section title="19. Contact">
              <p>
                Questions about these Terms? Reach out before starting a project — we're happy to
                discuss.
              </p>
              <div className="mt-4 p-5 rounded-xl bg-white/4 border border-white/8">
                <p className="text-white font-medium">Billings Builds LLC</p>
                <p className="text-zinc-400 text-sm mt-1">21950 215th St, Gallatin, MO 64640</p>
                <a
                  href="mailto:dbillings100@gmail.com"
                  className="text-red-400 hover:text-red-300 transition-colors text-sm mt-1 inline-block"
                >
                  dbillings100@gmail.com
                </a>
              </div>
              <p className="mt-6 text-zinc-600 text-xs">
                Have a project in mind?{' '}
                <Link to="/contact" className="text-red-400/70 hover:text-red-300 transition-colors">
                  Let's talk →
                </Link>
              </p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-white mb-3">{title}</h2>
      <div className="text-zinc-400 text-sm leading-relaxed">{children}</div>
    </section>
  )
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}
