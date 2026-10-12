import {
    MoveUpRight,
    Mail,
    MapPin,
    Phone,
    ArrowRight,
} from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer1 = () => {
    return (
        <footer>

            {/* ================= CTA ================= */}
            <div className="border-b border-white/30 !pb-4">
                <div className="ideal-width md:!pb-10 !pb-6">

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

                        <div className="max-w-3xl">
                            <p className="text-sm uppercase tracking-[0.25em] text-white/50 mb-5">
                                Have a project in mind?
                            </p>

                            <h2 className="!mt-8 mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold !text-white">
                                Let's build something
                                <span className="text-[#5a70cf]"> great together.</span>
                            </h2>
                        </div>

                        <Link to="https://wa.me/9264918773" 
                        className="group inline-flex gap-2 items-center justify-center rounded-full bg-[#e8e8e8] !px-7 !py-3 font-semibold !text-[#1f2d68]">
                         Let's Talk 
                         <MoveUpRight
                         size={17} 
                         className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                         /></Link>

                    </div>

                </div>
            </div>


            {/* ================= Main Footer ================= */}
            <div className="ideal-width !py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="lg:col-span-2">

                        <Link to="/" className="navbar-logo">
                            <img src={import.meta.env.BASE_URL + "images/logo4.png"} alt="DevAdee" />
                        </Link>

                        <p className="max-w-md text-white/55 leading-7">
                            I create modern, responsive, and user-focused
                            digital experiences that help businesses turn
                            ideas into meaningful products.
                        </p>

                        <p className="mt-6 text-sm text-white/40">
                            Design. Develop. Deliver.
                        </p>

                        {/* Social Icons */}
                        <div className="icon-box !mt-8">

                            <a
                                href="https://www.linkedin.com/in/aditya-mishra-2016v"
                                aria-label="Linkedin"
                                className="footer-icon"
                            >
                                <FaLinkedinIn size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/adee_vishnu/"
                                aria-label="Instagram"
                                className="footer-icon"     
                            >
                                <FaInstagram size={18} />
                            </a>
                            <a
                                href="https://wa.me/9264918773"
                                aria-label="Wshatsapp"
                                className="footer-icon"
                            >
                                <FaWhatsapp size={18} />
                            </a>

                        </div>

                    </div>


                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm uppercase tracking-[0.2em] !text-white/90 mb-6">
                            Navigation
                        </h3>

                        <ul className="space-y-4 text-white/65">

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-white transition-colors"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/services"
                                    className="hover:text-white transition-colors"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/project"
                                    className="hover:text-white transition-colors"
                                >
                                    Projects
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-white transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>


                    {/* Services */}
                    <div>
                        <h3 className="text-sm uppercase tracking-[0.2em] !text-white/90 mb-6">
                            Services
                        </h3>

                        <ul className="space-y-4 text-white/65">
 
                            <li>Website Development</li>
                            <li>React Development</li>
                            <li>Responsive Design</li>
                            <li>UI Implementation</li>
                            <li>Website Optimization</li>
                            <li>Website Maintenance</li>

                        </ul>
                    </div>

                </div>


                {/* Contact */}
                <div className="!mt-16 !pt-8 border-t border-white/10">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <a
                            href="mailto:hello@devadee.com"
                            className="group flex items-center gap-4"
                        >
                            <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#283981] transition-colors">
                                <Mail size={18} />
                            </div>

                            <div>
                                <p className="text-xs text-white/35 mb-1">
                                    Email
                                </p>
                                <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                                    hello@devadee.com
                                </p>
                            </div>
                        </a>


                        <a
                            href="tel:+919999999999"
                            className="group flex items-center gap-4"
                        >
                            <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#283981] transition-colors">
                                <Phone size={18} />
                            </div>

                            <div>
                                <p className="text-xs text-white/35 mb-1">
                                    Phone
                                </p>
                                <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                                    +91 99999 99999
                                </p>
                            </div>
                        </a>


                        <div className="flex items-center gap-4">

                            <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center">
                                <MapPin size={18} />
                            </div>

                            <div>
                                <p className="text-xs text-white/35 mb-1">
                                    Location
                                </p>
                                <p className="text-sm text-white/70">
                                    Lucknow, India
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* ================= Bottom Bar ================= */}
            <div className="border-t border-white/10">

                <div className="ideal-width py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-white/35 text-center md:text-left">
                        © {new Date().getFullYear()} DevAdee. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-white/35">

                        <Link
                            to="/privacy"
                            className="hover:text-white transition-colors"
                        >
                            Privacy
                        </Link>

                        <Link
                            to="/terms"
                            className="hover:text-white transition-colors"
                        >
                            Terms
                        </Link>

                        <a
                            href="#"
                            className="group flex items-center gap-2 hover:text-white transition-colors"
                        >
                            Back to top
                            <ArrowRight
                                size={15}
                                className="-rotate-90 transition-transform group-hover:-translate-y-1"
                            />
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer1;