
import { useState } from "react";
import { SquarePen, MoveRight } from "lucide-react";

const Tab1 = () => {
    // Tab 1 is open by default
    const [openTab, setOpenTab] = useState("tab1");

    const tabs = [
        {
            id: "tab1",
            title: "Tab 1",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, culpa.",
            content:
                "This is the content for Tab 1. You can add your service, project, description or any other information here.",
        },
        {
            id: "tab2",
            title: "Tab 2",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, culpa.",
            content:
                "This is the content for Tab 2. Different content will appear here when you hover or click Tab 2.",
        },
        {
            id: "tab3",
            title: "Tab 3",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, culpa.",
            content:
                "This is the content for Tab 3. You can customize this content according to your project.",
        },
    ];

    const activeTab = tabs.find((tab) => tab.id === openTab);

    return (
        <div className="flex flex-col lg:flex-row gap-8">

            {/* LEFT SIDE - TABS */}
            <div className="tabs flex flex-col h-full gap-4 lg:w-1/3">

                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`tabs-div ${
                            openTab === tab.id ? "active" : ""
                        }`}
                        onMouseEnter={() => setOpenTab(tab.id)}
                        onClick={() => setOpenTab(tab.id)}
                    >
                        {/* Tab Heading */}
                        <div className="flex gap-2 items-center">
                            <SquarePen size={20} />
                            <div>{tab.title}</div>
                        </div>

                        {/* Tab Description */}
                        <div className="childDiv">
                            <p>{tab.description}</p>

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


            {/* RIGHT SIDE - CONTENT */}
            <div className="tab-content lg:w-2/3 text-left">

                <div className="tab-pane">
                    <h2 className="text-2xl font-bold mb-4">
                        {activeTab.title}
                    </h2>

                    <p>
                        {activeTab.content}
                    </p>
                    <img src="../images/plantimg.jpg" className="h-75 object-cover"/>
                </div>

            </div>

        </div>
    );
};

export default Tab1;

