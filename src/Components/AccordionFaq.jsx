import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Plus,
    ArrowUpRight,
    MessageCircle,
    Zap,
    ShieldCheck,
    Heart,
    MoveUpRight,
} from "lucide-react";



const faqs = [
    {
        question: "What services does DevAdee offer?",
        answer:
            "I offer responsive website design and development, React.js development, landing pages, portfolio websites, business websites, and custom solutions tailored to your needs.",
    },
    {
        question: "Will my website work on mobile devices?",
        answer:
            "Absolutely! Every website is designed to adapt to mobile phones, tablets, laptops, and desktops for a consistent user experience.",
    },
    {
        question: "Which technologies do you use?",
        answer:
            "I work with HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, and GSAP to create modern and interactive websites.",
    },
    {
        question: "How long does it take to build a website?",
        answer:
            "The timeline depends on the scope and complexity of your project. After discussing your requirements, I can provide a more accurate estimate.",
    },
    {
        question: "Can you redesign my existing website?",
        answer:
            "Yes! I can refresh your website's design, improve responsiveness, refine layouts, and create a more polished user experience.",
    },
    {
        question: "How can I start a project with DevAdee?",
        answer:
            "Simply reach out through the Let's Talk section, WhatsApp, email, or social media. Share your idea, and we can discuss the next steps.",
    },
];


const AccordionFaq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="relative overflow-hidden bg-[#f7f9ff] !pt-10 !sm:py-16 md:!mt-16 !mt-8 FAQ">
            <div className="ideal-width">
                <div className="blurDiv1 !left-0" />

                <div className="relative mx-auto max-w-7xl">
                    {/* Heading */}
                    <div className="mx-auto mb-12 max-w-2xl sm:mb-16">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#283981]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#283981]">
                                FAQ's
                            </span>
                        </div>
                    </div>
                    <div className="!mb-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">

                        <div>
                            <h3 className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-[#151515] md:text-5xl lg:text-6xl">
                                Frequently Asked
                                <span className="text-[#283981]"> Questions</span>
                            </h3>
                        </div>

                        <div className="lg:justify-self-end lg:max-w-md">
                            <p className="!mb-6 leading-7 text-[#666666]">
                                Got questions? I've got answers. Find out more about
                                my services and how we can build something amazing together.
                            </p>

                            <Link
                                to="/services"
                                className="group inline-flex gap-2 items-center rounded-full bg-[#283981] !px-7 !py-3 font-semibold !text-white transition duration-300 hover:bg-[#1f2d68]"
                            >
                                Connect Us
                                <MoveUpRight
                                    size={16}
                                    className=" transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>

                        </div>
                    </div>

                    <div className="grid items-stretch gap-7 lg:grid-cols-[0.82fr_1.45fr] lg:gap-8">

                        {/* Contact card */}
                        <div className="bgRing relative flex flex-col overflow-hidden rounded-[8px] bg-gradient-to-br from-[#172d78] via-[#283981] to-[#3659c9] !p-7 text-white shadow-xl shadow-[#283981]/15 sm:p-10 !lg:p-9 !xl:p-11">

                            <div className="hoverRing" />

                            <div className="relative">
                                <div className="!mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                                    <MessageCircle size={28} />
                                </div>

                                <h3 className="max-w-xs text-3xl font-bold leading-tight sm:text-4xl !text-white">
                                    Still have
                                    <span className="mt-1 block text-blue-200">
                                        questions?
                                    </span>
                                </h3>

                                <p className="!mt-5 !mb-3 max-w-sm text-sm leading-7 text-blue-100 sm:text-base">
                                    If you don't find the answer you're looking for,
                                    feel free to reach out. I'm always happy to help!
                                </p>

                            </div>

                            <div className="relative !mt-auto grid grid-cols-3 gap-3 border-t border-white/15 !pt-7 !mt-10">
                                <div>
                                    <div className="!mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                                        <Zap size={19} />
                                    </div>
                                    <p className="text-xs leading-5 text-blue-100 sm:text-sm">
                                        Quick
                                        <br />
                                        Response
                                    </p>
                                </div>

                                <div>
                                    <div className="!mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                                        <ShieldCheck size={19} />
                                    </div>
                                    <p className="text-xs leading-5 text-blue-100 sm:text-sm">
                                        Reliable
                                        <br />
                                        Support
                                    </p>
                                </div>

                                <div>
                                    <div className="!mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                                        <Heart size={19} />
                                    </div>
                                    <p className="text-xs leading-5 text-blue-100 sm:text-sm">
                                        Your Success
                                        <br />
                                        Matters
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ accordion */}
                        <div className="!space-y-3.5">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <div
                                        key={faq.question}
                                        className={`overflow-hidden rounded-[8px] border transition-all duration-300 ${isOpen
                                            ? "border-[#283981]/10 bg-white shadow-lg shadow-[#283981]/[0.06]"
                                            : "border-transparent bg-white/80 hover:border-[#283981]/15 hover:shadow-md"
                                            }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenIndex(isOpen ? -1 : index)
                                            }
                                            aria-expanded={isOpen}
                                            className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                                        >
                                            <span
                                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${isOpen
                                                    ? "bg-[#e8edff] text-[#283981]"
                                                    : "bg-[#f1f4ff] text-[#536dfe]"
                                                    }`}
                                            >
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="flex-1 text-sm font-semibold leading-6 text-[#151b32] sm:text-base">
                                                {faq.question}
                                            </span>

                                            <span
                                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                                                    ? "rotate-45 bg-[#283981] text-white"
                                                    : "bg-[#f1f4ff] text-[#283981]"
                                                    }`}
                                            >
                                                <Plus size={19} />
                                            </span>
                                        </button>

                                        <div
                                            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen
                                                ? "grid-rows-[1fr]"
                                                : "grid-rows-[0fr]"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="!mx-5 !mb-5 !ml-[76px] rounded-xl bg-[#f5f7ff] !px-4 !py-4 text-sm leading-7 text-[#69738e] !sm:mr-6 !sm:ml-[84px] !sm:px-5">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AccordionFaq



