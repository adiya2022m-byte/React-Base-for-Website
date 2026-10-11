import { Link } from "react-router-dom";

import {
  FileText,
  UserCheck,
  BriefcaseBusiness,
  CreditCard,
  Clock,
  Copyright,
  ShieldCheck,
  Ban,
  RefreshCw,
  Scale,
  Mail,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";

const termsSections = [
  {
    icon: UserCheck,
    number: "01",
    title: "Acceptance of Terms",
    content:
      "By accessing or using the DevAdee website, you agree to these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using the website.",
  },
  {
    icon: BriefcaseBusiness,
    number: "02",
    title: "Our Services",
    content:
      "DevAdee provides web design, website development, React development, responsive UI implementation, website optimization, and maintenance services. The exact scope, deliverables, timeline, and cost of a project will be agreed upon separately with the client before work begins.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Project Requirements",
    content:
      "Clients are responsible for providing accurate project information, required content, images, credentials, and feedback in a timely manner. Delays in providing necessary materials or approvals may affect the agreed project timeline.",
  },
  {
    icon: CreditCard,
    number: "04",
    title: "Pricing and Payments",
    content:
      "Project pricing, payment schedules, deposits, and applicable taxes will be communicated and agreed upon before a project begins. Any additional work outside the agreed scope may require a separate estimate and approval. Work may be paused if an agreed payment becomes overdue.",
  },
  {
    icon: Clock,
    number: "05",
    title: "Timelines and Revisions",
    content:
      "Estimated delivery dates depend on the agreed scope, timely client feedback, and availability of required materials. The number of included revisions, delivery milestones, and any additional revision charges should be agreed upon in the project proposal or written agreement.",
  },
  {
    icon: Copyright,
    number: "06",
    title: "Intellectual Property",
    content:
      "Unless otherwise agreed in writing, ownership and usage rights for final project deliverables will be handled according to the project agreement and applicable law. Clients must have permission to use the text, images, logos, fonts, and other materials they supply. Third-party assets and open-source software remain subject to their respective licenses.",
  },
  {
    icon: Ban,
    number: "07",
    title: "Acceptable Use",
    content:
      "You agree not to use this website or our services for unlawful activities, fraud, distributing malicious software, violating another person's rights, or any other purpose prohibited by applicable law.",
  },
  {
    icon: ShieldCheck,
    number: "08",
    title: "Third-Party Services",
    content:
      "Websites and projects may use third-party hosting providers, APIs, plugins, payment services, or other external tools. Their availability, policies, pricing, and terms are controlled by their respective providers. Third-party services should be reviewed separately before use.",
  },
  {
    icon: RefreshCw,
    number: "09",
    title: "Cancellations and Refunds",
    content:
      "Project cancellation, refund eligibility, and payment for work already completed will be governed by the terms agreed upon with the client and applicable law. Any project-specific cancellation or refund conditions should be documented in writing before work begins.",
  },
  {
    icon: Scale,
    number: "10",
    title: "Limitation of Liability",
    content:
      "To the extent permitted by applicable law, DevAdee is not responsible for indirect or consequential losses arising from the use of this website or third-party services. Nothing in these terms excludes liability that cannot legally be excluded under applicable law.",
  },
  {
    icon: RefreshCw,
    number: "11",
    title: "Changes to These Terms",
    content:
      "We may update these Terms & Conditions to reflect changes to our website, services, or legal requirements. Updated terms will be published on this page with a revised date. Changes to an existing client project may also require a separate written agreement.",
  },
  {
    icon: Scale,
    number: "12",
    title: "Governing Law",
    content:
      "These terms are subject to applicable laws. The governing law and jurisdiction for a particular project or dispute should be established in the relevant written agreement and reviewed for legal compliance.",
  },
];

const Terms = () => {
  return (
    <main className="ideal-width bg-[#f8f9fb] text-[#151515]">
      {/* Hero Section */}
      <section className="privacyTermsecion">
        <div className="blurDiv1" />
        <div className="blurDiv2" />

        <div className="relative !py-12 !md:py-20" style={{ padding: "0 2rem" }}>
          <Link
            to="/"
            className="!mb-10 group inline-flex items-center gap-2 text-sm bg-[#283981] font-medium !text-white rounded !px-4 !py-2 transition hover:bg-[#1a255a] hover:text-[#283981]"
          >
            <ArrowLeft size={16}
            className="transition-transform duration-300 group:hover:-translate-x-1" />
            Back to Home
          </Link>

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#283981]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#283981]">
              Clear Terms, Better Experiences
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Terms & Conditions
            <span className="text-[#283981]">.</span>
          </h1>

          <p className="!my-6 max-w-3xl text-base leading-8 text-[#666666] md:text-lg">
            Please review the terms that apply when you browse DevAdee,
            enquire about our services, or work with us on a web development
            project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#666666]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#283981]/10 bg-[#f8f9fb] !px-4 !py-2">
              <FileText size={17} className="text-[#283981]" />
              Terms of Service
            </span>

            <span className="rounded-full bg-[#283981]/5 !px-4 !py-2">
              Last updated: October 10, 2026
            </span>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="ideal-width py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* Table of Contents */}
          <aside className="h-fit rounded-2xl border border-[#283981]/10 bg-white !p-6 lg:sticky lg:top-24">
            <h2 className="!mb-5 text-sm font-semibold uppercase tracking-wider text-[#283981]">
              On This Page
            </h2>

            <nav className="!space-y-2">
              {termsSections.map((section) => (
                <a
                  key={section.number}
                  href={`#section-${section.number}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#666666] transition hover:bg-[#283981]/5 hover:text-[#283981]"
                >
                  <span className="text-xs font-medium text-[#283981]/60">
                    {section.number}
                  </span>
                  {section.title}
                </a>
              ))}

              <a
                href="#contact"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#666666] transition hover:bg-[#283981]/5 hover:text-[#283981]"
              >
                <Mail size={15} />
                Contact Us
              </a>
            </nav>
          </aside>

          {/* Main Terms */}
          <div>
            <div className="!mb-10 rounded-2xl border border-[#283981]/10 bg-white !p-6 md:!p-8">
              <h2 className="!mb-3 text-xl font-semibold">
                Welcome to DevAdee
              </h2>

              <p className="text-sm leading-7 text-[#666666] md:text-base">
                These Terms & Conditions explain the general rules for
                accessing our website and using our services. Specific
                client projects may be subject to additional written
                proposals, quotations, or agreements. Where applicable,
                those agreements should clearly define the project scope,
                payment terms, ownership, and responsibilities.
              </p>
            </div>

            <div className="!space-y-5">
              {termsSections.map((section) => {
                const Icon = section.icon;

                return (
                  <article
                    key={section.number}
                    id={`section-${section.number}`}
                    className="!scroll-mt-28 rounded-2xl border border-[#283981]/10 bg-white !p-6 transition duration-300 hover:border-[#283981]/30 hover:shadow-lg hover:shadow-[#283981]/5 md:p-8"
                  >
                    <div className="flex items-start gap-4 md:gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#283981]/8 text-[#283981]">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 text-xs font-semibold tracking-widest text-[#283981]/60">
                          {section.number}
                        </div>

                        <h2 className="mb-3 text-lg font-semibold md:text-xl">
                          {section.title}
                        </h2>

                        <p className="text-sm leading-7 text-[#666666] md:text-base">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Contact Card */}
            <div
              id="contact"
              className="!mt-8 !scroll-mt-28 overflow-hidden rounded-2xl bg-[#1f2a5c] !p-7 !md:p-10 text-white transition hover:shadow-lg hover:shadow-[#283981]/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Mail size={23} />
              </div>

              <h2 className="!mt-6 text-2xl font-semibold md:text-3xl !text-white">
                Need clarification?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/70 md:text-base">
                Have questions about these terms, project requirements,
                payments, or our services? Contact us before proceeding
                with a project.
              </p>

              <a
                href="mailto:your-email@example.com"
                className="!mt-7 inline-flex items-center gap-2 rounded-full bg-white !px-6 !py-3 text-sm font-semibold !text-[#283981] transition hover:bg-[#e8ecff]"
              >
                Contact DevAdee
                <ArrowUpRight size={17} />
              </a>
            </div> 
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="!my-7 !py-2 border-t border-[#283981]/10 bg-white">
        <div className="ideal-width flex flex-col justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <p className="text-sm text-[#666666]">
            Ready to start your next digital project?
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#283981]"
          >
            Let's talk
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Terms;