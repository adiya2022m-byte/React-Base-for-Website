import { 
    MoveUpRight,
    ArrowRight,
    ArrowUpRight,
    Code2,
    LayoutPanelTop,
    Smartphone,
    Gauge,
} from "lucide-react";

import { Link } from "react-router-dom";

const services = [
    {
        number: "01",
        title: "Website Development",
        description: "Modern websites built around your brand and business goals.",
        icon: Code2,
        tags: ["Business Websites", "Landing Pages"],
    },
    {
        number: "02",
        title: "React Development",
        description: "Interactive web applications with reusable components.",
        icon: LayoutPanelTop,
        tags: ["React.js", "API Integration"],
    },
    {
        number: "03",
        title: "Responsive UI Design",
        description: "Seamless interfaces for mobile, tablet, and desktop.",
        icon: Smartphone,
        tags: ["Tailwind CSS", "Mobile First"],
    },
    {
        number: "04",
        title: "Website Optimization",
        description: "Refined performance, smoother interactions, and better usability.",
        icon: Gauge,
        tags: ["Performance", "UI Improvements"],
    },
];

const ServicesSection = () => {
    return (
        <div>
            <div className="w-full border-t border-[#1f2a5c] !my-12"></div>  
            <div className="ideal-width !py-[50px]">

                {/* Heading */}
                <div className="!mb-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">

                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#283981]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#283981]">
                                Services & Offers
                            </span>
                        </div>

                        <h2 className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-[#151515] md:text-5xl lg:text-6xl">
                            Turning ideas into
                            <span className="text-[#283981]"> digital experiences.</span>
                        </h2>
                    </div>

                    <div className="lg:justify-self-end lg:max-w-md">
                        <p className="!mb-6 leading-7 text-[#666666]">
                            From thoughtful interfaces to fully functional websites,
                            I build digital solutions that help businesses make
                            a lasting impression online.
                        </p>

                        <Link
                            to="/services"
                            className="group inline-flex gap-2 items-center rounded-full bg-[#283981] !px-7 !py-3 font-semibold !text-white transition duration-300 hover:bg-[#1f2d68]"
                        >
                            Explore All Services
                            <MoveUpRight
                                size={16}
                                className=" transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </div>
                </div>

                {/* Services list */}
                <div className="border-t border-black/10">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <Link
                                to="/services"
                                key={service.number}
                                className="group grid grid-cols-[38px_1fr_42px] items-center gap-4 border-b border-black/10 !py-6 transition-all duration-300 hover:bg-[#283981]/[0.035] sm:grid-cols-[50px_1fr_44px] sm:gap-6 sm:py-8 lg:grid-cols-[65px_1fr_1fr_50px]"
                            >
                                {/* Number */}
                                <span className="self-start pt-1 text-xs font-medium tracking-wider text-black/35 sm:text-sm">
                                    {service.number}
                                </span>

                                {/* Title and description */}
                                <div className="min-w-0">
                                    <div className="mb-2 flex flex-wrap items-center gap-3">
                                        <h3 className="text-lg font-semibold text-[#151515] transition-colors duration-300 group-hover:text-[#283981] sm:text-2xl">
                                            {service.title}
                                        </h3>

                                        <Icon
                                            size={19}
                                            strokeWidth={1.6}
                                            className="hidden text-[#283981]/60 transition-transform duration-300 group-hover:rotate-12 sm:block"
                                        />
                                    </div>

                                    <p className="max-w-lg text-sm leading-6 text-[#666666]">
                                        {service.description}
                                    </p>

                                    {/* Tags on mobile */}
                                    <div className="mt-3 flex flex-wrap gap-2 lg:hidden">
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-black/10 !px-3 !py-1 text-[11px] text-[#666666]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Tags on desktop */}
                                <div className="hidden flex-wrap gap-2 lg:flex">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-black/10 !px-3 !py-2 text-xs text-[#666666] transition-colors duration-300 group-hover:border-[#283981]/20 group-hover:text-[#283981]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Arrow */}
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#283981] transition-all duration-300 group-hover:border-[#283981] group-hover:bg-[#283981] group-hover:text-white sm:h-11 sm:w-11">
                                    <ArrowUpRight
                                        size={19}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-[#666666]">
                        Have something specific in mind?
                    </p>

                    <Link
                        to="/contact"
                        className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#283981]"
                    >
                        Let's discuss your project
                        <ArrowRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ServicesSection;


// className="group inline-flex items-center gap-3 rounded-full border border-[#283981]/20 !px-6 !py-3.5 text-sm font-semibold text-[#283981] transition-all duration-300 hover:border-[#283981] hover:bg-[#283981] hover:text-white"
