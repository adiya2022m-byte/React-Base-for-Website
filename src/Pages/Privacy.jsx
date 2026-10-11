import { Link } from "react-router-dom";

import {
  ShieldCheck,
  LockKeyhole,
  Database,
  Cookie,
  Eye,
  UserRoundCheck,
  Mail,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";

const policySections = [
  {
    icon: Database,
    number: "01",
    title: "Information We Collect",
    content:
      "When you contact us or request our services, you may provide information such as your name, email address, phone number, business details, and project requirements. We only collect information that is relevant to communicating with you or providing our services.",
  },
  {
    icon: Eye,
    number: "02",
    title: "How We Use Your Information",
    content:
      "We may use the information you provide to respond to enquiries, discuss project requirements, deliver services, improve our website, and communicate important updates. We do not claim to collect information that our website is not configured to collect.",
  },
  {
    icon: LockKeyhole,
    number: "03",
    title: "Data Protection",
    content:
      "We take reasonable steps to protect the information you share with us against unauthorized access, loss, misuse, or disclosure. However, no method of transmitting or storing information online can be guaranteed to be completely secure.",
  },
  {
    icon: Cookie,
    number: "04",
    title: "Cookies and Analytics",
    content:
      "Our website may use cookies or analytics tools to understand website usage and improve performance. The cookies and tracking technologies actually used depend on the services integrated into the website. You can manage available cookie permissions through your browser settings.",
  },
  {
    icon: UserRoundCheck,
    number: "05",
    title: "Third-Party Services",
    content:
      "Our website may link to or use third-party services, such as hosting providers, contact form services, analytics platforms, or social media websites. These services have their own privacy practices, which we encourage you to review.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Your Privacy Rights",
    content:
      "Depending on applicable law, you may have the right to request access to, correction of, or deletion of your personal information, or to object to certain processing. Contact us to make a privacy-related request.",
  },
  {
    icon: Database,
    number: "07",
    title: "Data Retention",
    content:
      "We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, including providing services, maintaining business records, or meeting legal obligations.",
  },
  {
    icon: LockKeyhole,
    number: "08",
    title: "Children's Privacy",
    content:
      "This website is intended for people seeking professional web development services and is not specifically directed at children. If you believe a child has provided personal information through our website, please contact us so we can review the matter.",
  },
  {
    icon: Eye,
    number: "09",
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy when our website, services, or legal obligations change. Any revised version will be published on this page with an updated revision date.",
  },
];

const Privacy = () => {
  return (
    <main className="ideal-width bg-[#f8f9fb] text-[#151515]">
      {/* Hero */}
      <section className="privacyTermsecion">
        <div className="blurDiv1" />
        <div className="blurDiv2" />

        <div className=" relative !py-12 !md:py-20" style={{ padding: "0 2rem" }}>
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
              Your Privacy Matters
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Privacy Policy<span className="text-[#283981]">.</span>
          </h1>

          <p className="!my-6 max-w-3xl text-base leading-8 text-[#666666] md:text-lg">
            Your trust matters to us. This page explains how DevAdee may
            collect, use, protect, and manage your personal information when
            you visit our website or contact us about our services.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#666666]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#283981]/10 bg-[#f8f9fb] !px-4 !py-2">
              <ShieldCheck size={17} className="text-[#283981] " />
              Privacy & Security
            </span>
            <span className="rounded-full bg-[#283981]/5 !px-4 !py-2 border border-[#283981]/10 text-[#283981]">
              Last updated: October 10, 2026
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="ideal-width py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* Table of Contents */}
          <aside className="h-fit rounded-2xl border border-[#283981]/10 bg-white !p-6 lg:sticky lg:top-24">
            <h2 className="!mb-5 text-sm font-semibold uppercase tracking-wider text-[#283981]">
              On This Page
            </h2>

            <nav className="!space-y-2">
              {policySections.map((section) => (
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

          {/* Policy Sections */}
          <div>
            <div className="!mb-10 rounded-2xl border border-[#283981]/10 bg-white !p-6 md:!p-8">
              <h2 className="!mb-3 text-xl font-semibold">
                Introduction
              </h2>
              <p className="text-sm leading-7 text-[#666666] md:text-base">
                Welcome to DevAdee. This Privacy Policy describes our
                information-handling practices for this website. By using
                our website, you acknowledge this policy. Where consent is
                legally required, we will seek it as appropriate.
              </p>
            </div>

            <div className="!space-y-5">
              {policySections.map((section) => {
                const Icon = section.icon;

                return (
                  <article
                    key={section.number}
                    id={`section-${section.number}`}
                    className="scroll-mt-28 rounded-2xl border border-[#283981]/10 bg-white !p-6 transition duration-300 hover:border-[#283981]/30 hover:shadow-lg hover:shadow-[#283981]/5 md:p-8"
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
                Questions about your privacy?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/70 md:text-base">
                If you have a question about this policy or want to make a
                privacy-related request, please get in touch with us.
              </p>

              <a
                href="mailto:your-adiya2022m@example.com"
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
            Have questions? We are happy to help.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#283981]"
          >
            Get in touch
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Privacy;