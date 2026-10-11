
import { useState, useEffect, useRef } from "react";
import { SquarePen, MoveRight } from "lucide-react";
import gsap from "gsap";

const Tab2 = () => {
    const [openTab, setOpenTab] = useState("tab1");

    const contentRef = useRef(null);
    const imageRef = useRef(null);

    const tabs = [
        {
            id: "tab1",
            title: "Restaurant Management System",
            description:
                "A modern restaurant management platform designed to simplify daily operations, orders, tables, and customer management.",
            content:
                "A responsive restaurant management system that helps manage menus, table bookings, customer orders, billing, and daily restaurant operations through an intuitive and easy-to-use interface.",
            image: import.meta.env.BASE_URL + "images/restaurantimg.png",
        },
        {
            id: "tab2",
            title: "Inventory Dashboard",
            description:
                "A clean and interactive dashboard for monitoring products, stock levels, sales, and inventory performance.",
            content:
                "An inventory management dashboard built to provide a clear overview of products, available stock, low-stock items, sales activity, and inventory data. The interface focuses on usability, organization, and quick access to important information.",
            image:import.meta.env.BASE_URL + "images/inventoryDashboardimg.png",
        },
        {
            id: "tab3",
            title: "NGO Management System",
            description:
                "A professional platform designed to manage NGO activities, campaigns, donations, and community initiatives.",
            content:
                "An NGO management platform that presents organizational information, social initiatives, donation campaigns, ongoing projects, and community activities in a structured and engaging way. The website is designed to build trust and make important information easily accessible.",
            image: import.meta.env.BASE_URL + "images/ngoimg.png",
        },
        {
            id: "tab4",
            title: "Travel Agency Platform",
            description:
                "A visually engaging travel platform for exploring destinations, travel packages, and personalized trip experiences.",
            content:
                "A responsive travel agency website created to showcase destinations, tour packages, travel services, and booking information. The design focuses on attractive visuals, simple navigation, and an engaging experience for travelers.",
            image: import.meta.env.BASE_URL + "images/travelimg2.png",
        },
    ];

    const activeTab = tabs.find((tab) => tab.id === openTab);


    // Animate content whenever tab changes
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            contentRef.current,
            {
                opacity: 0,
                x: 40,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            }
        );

        tl.fromTo(
            imageRef.current,
            {
                opacity: 0,
                scale: 0.95,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "power3.out",
            },
            "-=0.3"
        );

        return () => {
            tl.kill();
        };
    }, [openTab]);


    return (
        <div className="flex flex-col lg:flex-row gap-8">


            {/* ================= LEFT SIDE ================= */}

            <div className="tabs flex flex-col gap-4 lg:w-1/3">

                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`tabs-div ${openTab === tab.id ? "active" : ""
                            }`}
                        onMouseEnter={() => setOpenTab(tab.id)}
                        onClick={() => setOpenTab(tab.id)}
                    >

                        {/* Tab Heading */}
                        <div className="flex gap-2 items-center">
                            <SquarePen size={20} />

                            <div style={{ fontSize: "1.1rem" }}>
                                {tab.title}
                            </div>
                        </div>


                        {/* Tab Description */}
                        <div className="childDiv">

                            <p>
                                {tab.description}
                            </p>

                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="group inline-flex items-center gap-2 !mt-4 text-sm font-bold"
                            >
                                Learn more

                                <MoveRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>

                        </div>

                    </div>
                ))}

            </div>


            {/* ================= RIGHT SIDE ================= */}

            <div
                ref={contentRef}
                className="tab-content lg:w-2/3 text-left"
            >

                <div className="tab-pane">

                    <p className="!mb-4 text-gray-600 font-semibold" >
                        {activeTab.content}
                    </p>

                    <img
                        ref={imageRef}
                        src={activeTab.image}
                        alt={activeTab.title}
                        className="w-full h-[350px] rounded-2xl object-cover object-top"
                    />

                </div>

            </div>

        </div>
    );
};

export default Tab2;
